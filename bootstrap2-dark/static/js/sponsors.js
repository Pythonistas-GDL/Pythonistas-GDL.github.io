document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sponsor-marquee__track').forEach(track => {
    // Pause on pointer interactions — use WAAPI pause/resume when available
    // Track pause state explicitly
    track._marqueePaused = false;
    function pauseMarquee() {
      track._marqueePaused = true;
      // WAAPI pause
      if (track._marqueeAnimation && typeof track._marqueeAnimation.pause === 'function') {
        try { track._marqueeAnimation.pause(); } catch (e) {}
        return;
      }
      // RAF pause
      if (track._marqueeRAF && track._marqueeRAF.req) {
        cancelAnimationFrame(track._marqueeRAF.req);
        track._marqueeRAF.req = null;
        track._marqueeRAF.running = false;
        return;
      }
      // Fallback
      track.classList.add('paused');
    }
    function resumeMarquee() {
      track._marqueePaused = false;
      // WAAPI resume
      if (track._marqueeAnimation && typeof track._marqueeAnimation.play === 'function') {
        try { track._marqueeAnimation.play(); } catch (e) {}
        return;
      }
      // RAF resume
      if (track._marqueeRAF && !track._marqueeRAF.req) {
        track._marqueeRAF.startTs = performance.now() - (track._marqueeRAF.offset / track._marqueeRAF.speed) * 1000;
        track._marqueeRAF.req = requestAnimationFrame(function step(ts) {
          if (!track._marqueeRAF.startTs) track._marqueeRAF.startTs = ts - (track._marqueeRAF.offset / track._marqueeRAF.speed) * 1000;
          const elapsed = ts - track._marqueeRAF.startTs;
          track._marqueeRAF.offset = ((elapsed / 1000) * track._marqueeRAF.speed) % track._marqueeRAF.baseWidth;
          track.style.transform = `translateX(-${track._marqueeRAF.offset}px)`;
          track._marqueeRAF.req = requestAnimationFrame(step);
        });
        track._marqueeRAF.running = true;
        return;
      }
      // Fallback
      track.classList.remove('paused');
    }

    track.addEventListener('mouseenter', pauseMarquee);
    track.addEventListener('mouseleave', resumeMarquee);
    track.addEventListener('focusin', pauseMarquee);
    track.addEventListener('focusout', resumeMarquee);

    // Support pointer/touch devices
    track.addEventListener('pointerdown', pauseMarquee);
    track.addEventListener('pointerup', resumeMarquee);

    // Allow keyboard users to toggle pause with Space
    track.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (track._marqueePaused) resumeMarquee(); else pauseMarquee();
      }
    });

    const marquee = track.parentElement; // .sponsor-marquee
    const footer = marquee.closest('.sponsor-marquee-footer');
    const footerCenter = footer ? footer.querySelector('.centered-row') : null;

    // Mark the initial set of 'base' items to avoid cloning accumulation
    if (!track.dataset.initialized) {
      Array.from(track.children).forEach((c) => { c.dataset.base = '1'; });
      track.dataset.initialized = '1';
    }

    function ensureSeamless() {
      // Ensure we start with only the base items
      const baseChildren = Array.from(track.children).filter(c => c.dataset && c.dataset.base === '1');
      // remove any non-base children (old clones)
      Array.from(track.children).forEach(c => { if (!c.dataset || c.dataset.base !== '1') track.removeChild(c); });

      // measure base width (sum of base children widths)
      const baseWidth = baseChildren.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0);

      // If images or fonts haven't loaded yet, try again shortly
      if (baseWidth < 10) {
        setTimeout(ensureSeamless, 120);
        return;
      }

      const containerWidth = marquee.clientWidth;

      // Clone base children until total content width >= baseWidth + containerWidth
      // (ensures one full repetition can scroll without exposing empty space)
      let contentWidth = track.scrollWidth;
      let i = 0;
      const targetWidth = Math.max(baseWidth + containerWidth, containerWidth * 2);
      while (contentWidth < targetWidth && baseChildren.length) {
        const node = baseChildren[i % baseChildren.length].cloneNode(true);
        track.appendChild(node);
        contentWidth = track.scrollWidth;
        i += 1;
        if (i > 200) break; // safety cap
      }

      // Choose a gentle, eye-friendly velocity (px/sec). Slower on small screens.
      let pxPerSec = 60;
      if (window.innerWidth < 576) pxPerSec = 40;

      // Stop previous RAF if running
      if (track._marqueeRAF) {
        if (track._marqueeRAF.req) cancelAnimationFrame(track._marqueeRAF.req);
        track._marqueeRAF = null;
      }

      // Set up RAF-driven animation (smooth, continuous, no jump on loop)
      const raf = {
        baseWidth: baseWidth,
        speed: pxPerSec,
        offset: 0,
        req: null,
        running: true,
        startTs: null
      };

      function step(ts) {
        if (!raf.startTs) raf.startTs = ts - (raf.offset / raf.speed) * 1000;
        const elapsed = ts - raf.startTs;
        raf.offset = ((elapsed / 1000) * raf.speed) % raf.baseWidth;
        track.style.transform = `translateX(-${raf.offset}px)`;
        raf.req = requestAnimationFrame(step);
      }

      // Start the RAF loop
      raf.req = requestAnimationFrame(step);
      track._marqueeRAF = raf;

      // Pause/resume handlers will check track._marqueeRAF and act accordingly (no re-binding required)
    }

    function adjustPlacement() {
      if (!footer || !footerCenter) return;

      const margin = 20;
      let width = window.innerWidth - margin * 2;

      // Prefer to align to site's centered container if present (most accurate)
      const base = document.querySelector('.centered-row');
      if (base) {
        width = Math.min(base.offsetWidth, window.innerWidth - margin * 2);
      } else {
        const contentEl = document.querySelector('main#content') || document.querySelector('main');
        const sidebarEl = document.querySelector('#sidebar');
        if (contentEl && sidebarEl) {
          const contentRect = contentEl.getBoundingClientRect();
          const sidebarRect = sidebarEl.getBoundingClientRect();
          const right = Math.max(contentRect.right, sidebarRect.right);
          const leftRect = Math.min(contentRect.left, sidebarRect.left);
          width = Math.min(right - leftRect, window.innerWidth - margin * 2);
        } else {
          width = Math.min(1100, window.innerWidth - margin * 2);
        }
      }

      // Fallback centering strategy: make the footer full-width and constrain the inner marquee to the centered width
      footer.style.setProperty('--centered-width', Math.round(width) + 'px');

      // Reset footerCenter positioning so it fills footer; inner .sponsor-marquee will center itself via CSS
      footerCenter.style.position = '';
      footerCenter.style.left = '';
      footerCenter.style.transform = '';
      footerCenter.style.width = '100%';
      footerCenter.style.maxWidth = '100%';
      footerCenter.style.boxSizing = 'border-box';
    }

    // Init
    adjustPlacement();
    ensureSeamless();

    // Re-run on resize, debounced
    let resizeTimeout = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        adjustPlacement();
        ensureSeamless();
      }, 150);
    });

    // Also adjust on font load / window load
    window.addEventListener('load', () => { adjustPlacement(); ensureSeamless(); });
  });
});

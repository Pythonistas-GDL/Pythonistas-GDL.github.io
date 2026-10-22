(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  if (!toggle) return;

  const label = toggle.querySelector('.theme-toggle-label');
  const icon = toggle.querySelector('.theme-toggle-icon');

  const updateToggle = () => {
    const isDark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    label.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
    icon.textContent = isDark ? '☀' : '☾';
  };

  toggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;

    try {
      localStorage.setItem('pythonistas-theme', nextTheme);
    } catch (error) {}

    updateToggle();
  });

  updateToggle();
})();

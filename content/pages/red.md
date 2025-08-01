Title: Red
Date: 2025-07-26
Author: pythonistas gdl admins
Order: 3

<div class="call-for-sponsors">
  <p>En Pythonistas GDL sabemos que la colaboración nos hace más fuertes, encuentra listados los eventos próximos de nuestras comunidades amigas.</p>
  <p>Si tienes alguna pregunta o necesitas más información, puedes contactarnos a través de nuestro correo electrónico: <a href="mailto:red@pythonistas-gdl.org">red@pythonistas-gdl.org</a></p>
</div>

<div class="events-carousel">
  <h2 style="color: #7db904; margin-bottom: 30px;">📅 Próximos Eventos de la Red</h2>
  
  <!-- MDC Event -->
  <div class="event-card">
    <div class="row">
      <div class="col-md-4 text-center">
        <img src="{static}/images/red/140825_mdc.jpg" alt="MDC Event" class="event-image" onclick="openModal(this.src, 'MDC First 14 - International August')">
      </div>
      <div class="col-md-8">
        <h3 class="event-title">MDC.First(14: Int , August: String).JoinUs()</h3>
        <p class="event-description">
          Ve al primer evento de Mobile Developer Community (MDC), la comunidad de desarrollo móvil.
        </p>
        
        <div class="event-meta">
          <div class="meta-item">
            <i class="fas fa-calendar-alt"></i>
            <strong>Fecha:</strong>
            <span>Miércoles, 14 de Agosto 2025</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-map-marker-alt"></i>
            <strong>Lugar:</strong>
            <span><a href="https://maps.app.goo.gl/vyTeiYrW4djDGBjD7" target="_blank" style="color: #7db904; text-decoration: none;">Amado Nervo 2200, Jardines del Sol, Zapopan</a></span>
          </div>
          <div class="meta-item">
            <i class="fas fa-clock"></i>
            <strong>Hora:</strong>
            <span>7:00 PM - 10:00 PM</span>
          </div>
        </div>
        
        <div class="event-register">
          <a href="https://app.hi.events/event/1752/mdcfirst14-int-august-stringjoinus" target="_blank" class="btn">
            <i class="fas fa-external-link-alt"></i> Registrarse
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- JSConf Event -->
  <div class="event-card">
    <div class="row">
      <div class="col-md-4 text-center">
        <img src="{static}/images/red/30311025_jsconf.png" alt="JSConf" class="event-image" onclick="openModal(this.src, 'JSConf México 2025')">
      </div>
      <div class="col-md-8">
        <h3 class="event-title">JSConf México 2025</h3>
        <p class="event-description">
          La conferencia de JavaScript más importante de México regresa. Únete a desarrolladores 
          de todo el país y el mundo para aprender sobre las últimas tendencias en JavaScript y frameworks modernos.
        </p>
        
        <div class="event-meta">
          <div class="meta-item">
            <i class="fas fa-calendar-alt"></i>
            <strong>Fecha:</strong>
            <span>30 y 31 de Octubre 2025</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-map-marker-alt"></i>
            <strong>Lugar:</strong>
            <span><a href="https://maps.app.goo.gl/DGGykep9jjeBRfri6" target="_blank" style="color: #7db904; text-decoration: none;">Jardín Americana</a></span>
          </div>
        <div class="event-register">
          <a href="https://jsconfmx.org" target="_blank" class="btn">
            <i class="fas fa-external-link-alt"></i> Registrarse
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Single Dynamic Image Modal -->
<div id="imageModal" class="image-modal" onclick="closeModal()">
  <div class="modal-content" onclick="event.stopPropagation()">
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <img id="modalImage" class="modal-image" src="" alt="">
  </div>
</div>

<script>
function openModal(imageSrc, imageAlt) {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImage');
  
  modal.style.display = "block";
  modalImg.src = imageSrc;
  modalImg.alt = imageAlt;
  
  // Prevent body scrolling when modal is open
  document.body.style.overflow = "hidden";
}

function closeModal() {
  var modal = document.getElementById('imageModal');
  modal.style.display = "none";
  
  // Restore body scrolling
  document.body.style.overflow = "auto";
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
</script>

<div class="communities-grid">
  <h3>🤝 Comunidades Amigas</h3>
  
  <div class="community-logo-grid">
    <!-- Cloud Native -->
    <div class="community-item">
      <img src="{static}/images/red/cloud_native.png" alt="Cloud Native" class="community-logo">
      <div class="community-name">Cloud Native</div>
      <a href="#" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>

    <!-- DevOps GDL -->
    <div class="community-item">
      <img src="{static}/images/red/devops_gdl.png" alt="DevOps GDL" class="community-logo">
      <div class="community-name">DevOps GDL</div>
      <a href="#" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>

    <!-- Fedora México -->
    <div class="community-item">
      <img src="{static}/images/red/fedora_mexico.jpg" alt="Fedora México" class="community-logo">
      <div class="community-name">Fedora México</div>
      <a href="#" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>

    <!-- Golang GDL -->
    <div class="community-item">
      <img src="{static}/images/red/golang_gdl.png" alt="Golang GDL" class="community-logo">
      <div class="community-name">Golang GDL</div>
      <a href="#" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>

    <!-- J4Guanatos -->
    <div class="community-item">
      <img src="{static}/images/red/j4g.png" alt="J4Guanatos" class="community-logo">
      <div class="community-name">J4Guanatos</div>
      <a href="https://www.facebook.com/j4Guanatos" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>

    <!-- JUG GDL -->
    <div class="community-item">
      <img src="{static}/images/red/jug_gdl.png" alt="JUG GDL" class="community-logo">
      <div class="community-name">JUG Guadalajara</div>
      <a href="#" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>

    <!-- Kotlin User Group -->
    <div class="community-item">
      <img src="{static}/images/red/kotling_user_group.jpg" alt="Kotlin User Group" class="community-logo">
      <div class="community-name">Kotlin User Group</div>
      <a href="#" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>

    <!-- Linuxeros Zapopan -->
    <div class="community-item">
      <img src="{static}/images/red/linuxeros_zapopan.png" alt="Linuxeros Zapopan" class="community-logo">
      <div class="community-name">Linuxeros Zapopan</div>
      <a href="#" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>

    <!-- Mobile Development Community -->
    <div class="community-item">
      <img src="{static}/images/red/mdc.jpg" alt="Mobile Development Community" class="community-logo">
      <div class="community-name">Mobile Development Community</div>
      <a href="https://mdcommunity.org" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
  </div>
  




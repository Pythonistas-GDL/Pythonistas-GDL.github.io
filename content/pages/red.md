Title: Red
Date: 2025-07-26
Author: pythonistas gdl admins
Order: 3

<div class="call-for-sponsors">
  <p>En Pythonistas GDL sabemos que la colaboración nos hace más fuertes, encuentra listados los eventos próximos de nuestras comunidades amigas.</p>
  <p>Si tienes alguna pregunta o necesitas más información, puedes contactarnos a través de nuestro correo electrónico: <a href="mailto:red@pythonistas-gdl.org">red@pythonistas-gdl.org</a></p>
</div>

<!-- Events carousel section temporarily hidden - no upcoming events
<div class="events-carousel">
  <h2 style="color: #7db904; margin-bottom: 30px;">📅 Próximos Eventos de la Red</h2>
  
  

  No upcoming events at the moment
</div>
-->

<!-- Single Dynamic Image Modal -->
<div id="imageModal" class="image-modal" onclick="closeModal()">
  <div class="modal-content" onclick="event.stopPropagation()">
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <img id="modalImage" class="modal-image" src="" alt="Vista ampliada de evento de la comunidad tecnológica">
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
    <!-- Python CDMX -->
    <div class="community-item">
      <img src="{static}/images/red/python_cdmx.png" alt="Logo de Python Ciudad de México - Comunidad de desarrolladores Python" class="community-logo">
      <div class="community-name">Python CDMX</div>
      <a href="https://pythoncdmx.org" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- JUG GDL -->
    <div class="community-item">
      <img src="{static}/images/red/jug_gdl.png" alt="Logo de Java User Group Guadalajara - Comunidad de desarrolladores Java" class="community-logo">
      <div class="community-name">JUG Guadalajara</div>
      <a href="https://gdljug.github.io" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- J4Guanatos -->
    <div class="community-item">
      <img src="{static}/images/red/j4g.png" alt="Logo de Java for Guanatos - Comunidad de desarrolladores Java en Guadalajara" class="community-logo">
      <div class="community-name">J4Guanatos</div>
      <a href="https://www.facebook.com/j4Guanatos" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- Linuxeros Zapopan -->
    <div class="community-item">
      <img src="{static}/images/red/linuxeros_zapopan.png" alt="Logo de Linuxeros Zapopan - Comunidad de entusiastas de Linux y software libre" class="community-logo">
      <div class="community-name">Linuxeros Zapopan</div>
      <a href="#" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- Fedora México -->
    <div class="community-item">
      <img src="{static}/images/red/fedora_mexico.jpg" alt="Logo de Fedora México - Comunidad de contribuidores al proyecto Fedora Linux" class="community-logo">
      <div class="community-name">Fedora México</div>
      <a href="https://fedoramx.fedorapeople.org" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- Golang GDL -->
    <div class="community-item">
      <img src="{static}/images/red/golang_gdl.png" alt="Logo de Golang Guadalajara - Comunidad de desarrolladores Go" class="community-logo">
      <div class="community-name">Golang GDL</div>
      <a href="https://www.facebook.com/golang.guadalajara" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- Cloud Native -->
    <div class="community-item">
      <img src="{static}/images/red/cloud_native.png" alt="Logo de Cloud Native Guadalajara - Comunidad de tecnologías nativas de la nube" class="community-logo">
      <div class="community-name">Cloud Native</div>
      <a href="https://www.facebook.com/cloudnativegdl/" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- DevOps GDL -->
    <div class="community-item">
      <img src="{static}/images/red/devops_gdl.png" alt="Logo de DevOps Guadalajara - Comunidad de profesionales en DevOps y automatización" class="community-logo">
      <div class="community-name">DevOps GDL</div>
      <a href="https://www.facebook.com/groups/devopsgdl" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- Kotlin User Group -->
    <div class="community-item">
      <img src="{static}/images/red/kotling_user_group.jpg" alt="Logo de Kotlin User Group Guadalajara - Comunidad de desarrolladores Kotlin" class="community-logo">
      <div class="community-name">Kotlin User Group</div>
      <a href="https://www.facebook.com/GuadalajaraKUG/" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    <!-- Mobile Development Community -->
    <div class="community-item">
      <img src="{static}/images/red/mdc.jpg" alt="Logo de Mobile Development Community - Comunidad de desarrollo móvil" class="community-logo">
      <div class="community-name">Mobile Development Community</div>
      <a href="https://mdcommunity.org" target="_blank" class="community-link">
        <i class="fas fa-external-link-alt"></i> Visitar
      </a>
    </div>
    </div>
  </div>
</div>


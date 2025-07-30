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
  
  <!-- Java 4 Guadalajara JUG Event -->
  <div class="event-card">
    <div class="row">
      <div class="col-md-4 text-center">
        <img src="{static}/images/red/310725_j4g_jug.jpg" alt="Java 4 Guadalajara JUG" class="event-image" onclick="openModal(this.src, 'Java 4 Guadalajara JUG')">
      </div>
      <div class="col-md-8">
        <h3 class="event-title">meetup.join("JUG","j4G").map("JVM");</h3>
        <p class="event-description">
          Únete al Java User Group de Guadalajara y al J4G en este evento sobre la JVM.
        </p>
        
        <div class="event-meta">
          <div class="meta-item">
            <i class="fas fa-calendar-alt"></i>
            <strong>Fecha:</strong>
            <span>Jueves, 31 de Julio 2025</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-map-marker-alt"></i>
            <strong>Lugar:</strong>
            <span><a href="https://maps.app.goo.gl/rSFF2DXLykJdUTXi9" target="_blank" style="color: #7db904; text-decoration: none;">City Express Plus by Marriott Guadalajara Providencia</a></span>
          </div>
          <div class="meta-item">
            <i class="fas fa-clock"></i>
            <strong>Hora:</strong>
            <span>7:00 PM - 10:00 PM</span>
          </div>
        </div>
        
        <div class="event-register">
          <a href="https://www.meetup.com/j4guanatos/events/309946887/" target="_blank" class="btn">
            <i class="fas fa-external-link-alt"></i> Registrarse
          </a>
        </div>
      </div>
    </div>
  </div>

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



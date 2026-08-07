export const EventDetails = () => {
  return (
    <section class="event-details" id="event-details">
      <div class="event-details-container">
        <h2 class="event-details-heading">Event Details</h2>
        <hr class="divider" />
        <div class="event-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d947.0087911312402!2d-64.82574465775576!3d18.29999999868523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c051168c4c9f33d%3A0x4b2c4e6907c7bce7!2sLittle%20Saint%20James!5e0!3m2!1sen!2sph!4v1782400311389!5m2!1sen!2sph"
            style="border: 0"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div class="event-map-details">
          <div class="event-map-logo" aria-hidden="true">
            <span>:)</span>
          </div>
          <address class="event-map-location">
            <p class="location">LOCATION GOES HERE</p>
            <p class="extra">extra info in here yeah?</p>
          </address>
          <time class="event-map-time" datetime="12:00">
            12:00 PM
          </time>
        </div>
        <h2 class="event-details-heading">Our Families</h2>
        <hr class="divider" />
        <div class="event-families-grid">
          <article class="event-families-container">
            <h3>BRIDE'S PARENTS</h3>
            <div class="event-families">
              <p class="parent-name">Linux Windows</p>
              <span class="ampersand">&</span>
              <p class="parent-name">Apple Android</p>
            </div>
          </article>
          <article class="event-families-container">
            <h3>GROOM'S PARENTS</h3>
            <div class="event-families">
              <p class="parent-name">Samsung Alibaba</p>
              <span class="ampersand">&</span>
              <p class="parent-name">Qwen Gemini</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

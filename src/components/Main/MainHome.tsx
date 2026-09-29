export const MainHome = () => {
  return (
    <section class="home" id="home">
      <div class="home-container">
        <p class="home-text">Witness our union</p>

        <h1 class="home-heading">
          <span class="name">Jilver Ryan Tim</span>
          <span class="ampersand">and</span>
          <span class="name">Sunshine Gatmen</span>
        </h1>

        <blockquote class="home-quote">
          <p>
            "A marriage is always made up of two people who are prepared to
            swear that only the other one snores."
          </p>
        </blockquote>

        <time datetime="2027-06-26" class="home-date">
          <span class="home-text">June</span>
          <div class="home-date-day-container">
            <hr class="divider" />
            <span class="day">26</span>
            <hr class="divider" />
          </div>
          <span class="home-text">2027</span>
        </time>

        <address class="home-location">
          <p class="location home-text">LOCATION GOES HERE</p>
          <p class="extra">extra info in here yeah?</p>
        </address>

        <div class="home-actions">
          <a href="#rsvp" class="action">
            Confirm Attendance
          </a>
          <label for="palettes" class="sr-only">
            Choose a color palette
          </label>
          <select name="palettes" id="palettes" class="action">
            <option value="" disabled selected>
              Choose palette (dev mode)
            </option>
            <option value="classic-elegant">Classic Elegant</option>
            <option value="modern-sage-green">Modern Sage Green</option>
            <option value="romantic-blush">Romantic Blush</option>
            <option value="luxury-champagne">Luxury Champagne</option>
            <option value="white-&-terracotta">White And Terracotta</option>
            <option value="sage-&-olive">Sage And Olive</option>
            <option value="champagne-&-slate-blue">
              Champagne And Slate Blue
            </option>
            <option value="terracotta-&-blush">Terracotta And Blush</option>
            <option value="modern-minimalist">Modern Minimalist</option>
            <option value="rustic-botanical">Rustic Botanical</option>
            <option value="moody-luxe">Moody Luxe</option>
            <option value="sunset-boho">Sunset Boho</option>
            <option value="midnight-luxe-test">Midnight Luxe Test</option>
          </select>
        </div>
      </div>
    </section>
  );
};

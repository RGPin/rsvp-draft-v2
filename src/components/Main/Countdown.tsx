export const Countdown = () => {
  return (
    <section class="countdown" id="countdown" aria-live="polite">
      <div class="countdown-container">
        <h2 class="countdown-heading">It's the final countdown!</h2>

        <div class="timer" role="timer" aria-atomic="true">
          <div class="timer-item">
            <p class="timer-count">
              <span id="days"></span>
            </p>
            <p class="timer-label">DAYS</p>
          </div>
          <div class="timer-item">
            <p class="timer-count">
              <span id="hours"></span>
            </p>
            <p class="timer-label">HOURS</p>
          </div>
          <div class="timer-item">
            <p class="timer-count">
              <span id="minutes"></span>
            </p>
            <p class="timer-label">MINUTES</p>
          </div>
          <div class="timer-item">
            <p class="timer-count">
              <span id="seconds"></span>
            </p>
            <p class="timer-label">SECONDS</p>
          </div>
        </div>

        <blockquote class="countdown-quote">
          <p>
            "My favorite part of a deadline is the whooshing sound it makes as
            it flies right by me."
          </p>
        </blockquote>

        <time datetime="2027-06-26" class="countdown-date countdown-text">
          JUNE 26, 2027
        </time>

        <address class="countdown-location">
          <p class="location countdown-text">LOCATION GOES HERE</p>
          <p class="extra">extra info in here yeah?</p>
        </address>
      </div>
    </section>
  );
};

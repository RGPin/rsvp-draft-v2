export const RSVP = () => {
  return (
    <section class="rsvp" id="rsvp">
      <div class="rsvp-container">
        <h2 class="rsvp-heading">Confirm Your Attendance</h2>
        <p class="rsvp-subheader">
          kindly confirm your attendance by May 13, 2027
        </p>
        <hr class="divider" />
        <div class="form-container">
          <form id="rsvp-form">
            <fieldset>
              <div class="field-container">
                <label for="response"> Enter your first name: </label>
                <input type="text" name="firstname" id="firstname" />
              </div>
              <div class="field-container">
                <label for="response"> Enter your last name: </label>
                <input type="text" name="lastname" id="lastname" />
              </div>
              <button type="submit" id="rsvp-btn">
                Confirm Attendance
              </button>
            </fieldset>
          </form>
        </div>
        <div id="rsvp-result" aria-live="polite"></div>
      </div>
    </section>
  );
};

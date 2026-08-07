export const RSVP = () => {
  return (
    <section class="rsvp" id="rsvp">
      <div class="rsvp-container">
        <h2 class="rsvp-heading">Confirm Your Attendance</h2>
        <p class="rsvp-subheader">
          kindly confirm your attendance by may 13, 2027
        </p>
        <hr class="divider" />
        <div class="form-container">
          <form
            onsubmit="
                event.preventDefault();
                alert('Like I said, chill. Design muna before backend feats');
                this.reset();
              "
          >
            <fieldset>
              <div class="field-container">
                <label for="response"> Enter your first name: </label>
                <input type="text" name="firstname" id="firstname" required />
              </div>
              <div class="field-container">
                <label for="response"> Enter your last name: </label>
                <input type="text" name="lastname" id="lastname" required />
              </div>
              <button type="submit">Confirm Attendance</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

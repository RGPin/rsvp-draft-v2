export const LoveMessage = () => {
  return (
    <section class="love-messages" id="love-messages">
      <div class="love-messages-container">
        <h2 class="love-messages-heading">Send A Message To The Lovebirds</h2>
        <hr class="divider" />
        <div class="form-container">
          <form
            onsubmit="
                event.preventDefault();
                alert('Chill. Design muna before backend feats');
                this.reset();
              "
          >
            <fieldset>
              <div class="field-container">
                <label for="sender"> Enter your name/nickname/alias: </label>
                <input type="text" id="sender" name="sender" />
              </div>

              <div class="field-container">
                <label for="message"> Enter message: </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Congrats. Happy for you... tch"
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

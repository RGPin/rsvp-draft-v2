type PropType = {
  name: string;
};

export const Invited = ({ name }: PropType) => {
  if (name === "Alfrenel Tandoc") {
    return (
      <p className="rsvp-response">
        Sige pero ngayon lang ah. Tas dala ka ng gifts. At least 10k worth. Tas
        puff para kay Ryg kasi good boy siya
      </p>
    );
  }
  return (
    <>
      <p className="rsvp-response">Please confirm your attendance:</p>
      <form id="response-form">
        <fieldset>
          <input
            type="radio"
            name="guest-response"
            value="accept"
            id="accept"
            checked
          />
          <label for="accept">Accept Invitation</label>
          <input
            type="radio"
            name="guest-response"
            value="decline"
            id="decline"
          />
          <label for="decline">Decline Invitation</label>
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  );
};

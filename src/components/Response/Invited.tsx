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
    <p className="rsvp-response">Yes, your presence is appreciated {name}</p>
  );
};

type PropType = {
  name: string;
};

export const Uninvited = ({ name }: PropType) => {
  return <p className="rsvp-response">No, we do not want you, {name}, here</p>;
};

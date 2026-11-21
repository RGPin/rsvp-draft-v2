type PropType = {
  name: string;
};

export const Uninvited = ({ name }: PropType) => {
  return <p className="rsvp-response">The name, {name}, is not on the list.</p>;
};

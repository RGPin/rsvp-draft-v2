import { Context } from "hono";
import { getAllInvites } from "../db/queries";

export const getSecretPage = async (c: Context) => {
  const invitesList = await getAllInvites(c.env.DATABASE_URL);
  return c.html(
    <>
      {invitesList.length > 0 &&
        invitesList.map((invite) => <p>{invite.guest_name}</p>)}
    </>,
  );
};

export const postAddGuest = (c: Context) => {
  return c.text("lalala");
};

export const deleteGuest = (c: Context) => {
  return c.text("lalala");
};

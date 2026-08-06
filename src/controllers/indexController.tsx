import { Context } from "hono";
import { getAll } from "../db/queries";

export const testController = async (c: Context) => {
  const data = await getAll(c.env.DATABASE_URL);
  return c.html(
    <html>
      <body>
        {data?.map((user) => (
          <li key={user.id}>{user.guest_name}</li>
        ))}
      </body>
    </html>,
  );
};

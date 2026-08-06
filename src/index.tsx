import { Context, Hono } from "hono";
import { Test } from "./components/Test";
import { neon } from "@neondatabase/serverless";
import indexRouter from "./routes/indexRouter";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/test", async (c: Context) => {
  const sql = neon(c.env.DATABASE_URL);
  const users = await sql`SELECT * FROM invites`;

  return c.html(
    <html>
      <body>
        <h1>Hello Hono, secret: {c.env.MY_VAR}</h1>
        <Test />
        <ul>
          {users?.map((user) => (
            <li>{user.guest_name}</li>
          ))}
        </ul>
      </body>
    </html>,
  );
});

app.route("/api", indexRouter);

export default app;

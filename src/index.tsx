import { Context, Hono } from "hono";
import indexRouter from "./routes/indexRouter";
import { jsxRenderer } from "hono/jsx-renderer";

const app = new Hono();

app.use(
  jsxRenderer(({ children }, c: Context) => {
    const head = c.get("head");
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="noindex" />
          {head}
          <title>Home</title>
        </head>
        <body>{children}</body>
      </html>
    );
  }),
);

app.route("/", indexRouter);

export default app;

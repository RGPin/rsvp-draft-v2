import { Context, Hono } from "hono";
import { Test } from "./components/Test";
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

app.get("/", async (c: Context) => {
  c.set(
    "head",
    <>
      <link rel="stylesheet" href="/index.css" />
      <script src="/js/index.js" defer type="module"></script>
    </>,
  );
  return c.render(
    <>
      <h1>sljfljf</h1>
      <Test />
    </>,
  );
});

app.route("/", indexRouter);

export default app;

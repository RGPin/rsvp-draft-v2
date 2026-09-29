import { Context } from "hono";
import { Main } from "../components/Main/Main";
import { Invited } from "../components/Response/Invited";
import z from "zod";
import { Error } from "../components/Response/Error";
import { checkInvites } from "../db/queries";
import { Uninvited } from "../components/Response/Uninvited";

export const getMainPage = (c: Context) => {
  c.set(
    "head",
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,300;6..96,500;6..96,700&family=Cinzel:wght@400;500;700&family=Cormorant+Garamond:wght@300;500;700&family=DM+Sans:wght@300;500;700&family=DM+Serif+Display&family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,700&family=Inter:wght@300;500;700&family=Jost:wght@300;500;700&family=Lato:wght@300;400;700&family=Lora:wght@400;500;700&family=Manrope:wght@300;500;700&family=Montserrat:wght@300;500;700&family=Nunito:wght@300;500;700&family=Parisienne&family=Playfair+Display:wght@300;500;700&family=Plus+Jakarta+Sans:wght@300;500;700&family=Source+Sans+3:wght@300;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/index.css" />
      <script src="/js/index.js" defer type="module"></script>
      <script src="/js/main.js" defer></script>
    </>,
  );
  return c.render(
    <>
      <Main />
    </>,
  );
};

const rsvpInputSchema = z.object({
  firstname: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or less"),

  lastname: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be 50 characters or less"),
});

export const postFormResponse = async (c: Context) => {
  const body = await c.req.parseBody();

  const formData = rsvpInputSchema.safeParse(body);

  const firstName = formData.data?.firstname;
  const lastName = formData.data?.lastname;
  const fullName = `${firstName} ${lastName}`;

  if (!formData.success) {
    const fieldErrors = z.flattenError(formData.error).fieldErrors;
    return c.html(
      <>
        <Error errors={fieldErrors} />
      </>,
    );
  }

  const guest = await checkInvites(c.env.DATABASE_URL, fullName);

  if (!guest?.guest_name) {
    return c.html(
      <>
        <Uninvited name={fullName} />
      </>,
    );
  }

  return c.html(
    <>
      <Invited name={guest.guest_name} />
    </>,
  );
};

export const postGuestResponse = (c: Context) => {
  return c.text("lalala");
};

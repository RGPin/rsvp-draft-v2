import { neon } from "@neondatabase/serverless";

type Invite = {
  id: number;
  guest_name: string;
  responded: boolean;
  attending: boolean | null;
  responded_at: Date | null;
  token: string;
};

export const getAllInvites = async (dbUrl: string): Promise<Invite[]> => {
  const sql = neon(dbUrl);
  return (await sql`
    SELECT *
    FROM invites
    ORDER BY guest_name ASC
    `) as Invite[];
};

export const checkInvites = async (
  dbUrl: string,
  personName: string,
): Promise<Pick<Invite, "guest_name" | "token"> | null> => {
  const sql = neon(dbUrl);
  const rows = await sql`
    SELECT guest_name, token
    FROM invites
    WHERE LOWER(guest_name) = LOWER(${personName})
    `;
  return (rows[0] ?? null) as Pick<Invite, "guest_name" | "token"> | null;
};

export const updateGuestResponse = async (
  dbUrl: string,
  token: string,
  response: boolean,
): Promise<Pick<
  Invite,
  "guest_name" | "token" | "attending" | "responded_at"
> | null> => {
  const sql = neon(dbUrl);
  const rows = await sql`
    UPDATE invites
    SET responded = TRUE,
        attending = ${response},
        responded_at = NOW()
    WHERE token = ${token}
    RETURNING guest_name, token, attending, responded_at
  `;
  return (rows[0] ?? null) as Pick<
    Invite,
    "guest_name" | "token" | "attending" | "responded_at"
  > | null;
};

export const addNewGuest = async (
  dbUrl: string,
  guestName: string,
): Promise<Pick<Invite, "guest_name" | "token"> | null> => {
  const sql = neon(dbUrl);
  const rows = await sql`
    INSERT INTO invites (guest_name)
    VALUES (${guestName})
    RETURNING guest_name, token
  `;

  return (rows[0] ?? null) as Pick<Invite, "guest_name" | "token"> | null;
};

export const removeGuest = async (
  dbUrl: string,
  token: string,
): Promise<Pick<Invite, "guest_name" | "token"> | null> => {
  const sql = neon(dbUrl);
  const rows = await sql`
    DELETE FROM invites
    WHERE token = ${token}
    RETURNING guest_name, token
  `;

  return (rows[0] ?? null) as Pick<Invite, "guest_name" | "token"> | null;
};

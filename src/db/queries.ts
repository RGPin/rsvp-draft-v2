import { neon } from "@neondatabase/serverless";

export const getAll = (dbUrl: string) => {
  const sql = neon(dbUrl);
  return sql`SELECT * FROM invites`;
};

export const getAllInvites = (dbUrl: string) => {
  const sql = neon(dbUrl);
  return sql`
    SELECT guest_name, responded, attending, responded_at, token 
    FROM invites
    ORDER BY guest_name ASC
    `;
};

export const checkInvites = async (dbUrl: string, personName: string) => {
  const sql = neon(dbUrl);
  const rows = await sql`
    SELECT guest_name, token
    FROM invites
    WHERE LOWER(guest_name) = LOWER(${personName})
    `;
  return rows[0] ?? null;
};

export const updateGuestResponse = async (
  dbUrl: string,
  token: string,
  response: boolean,
) => {
  const sql = neon(dbUrl);
  const rows = await sql`
    UPDATE invites
    SET responded = TRUE,
        attending = ${response},
        responded_at = NOW()
    WHERE token = ${token}
    RETURNING guest_name, token, attending, responded_at
  `;
  return rows[0] ?? null;
};

export const addNewGuest = async (dbUrl: string, guestName: string) => {
  const sql = neon(dbUrl);
  const rows = await sql`
    INSERT INTO invites (guest_name)
    VALUES (${guestName})
    RETURNING guest_name, token
  `;

  return rows[0] ?? null;
};

export const removeGuest = async (dbUrl: string, token: string) => {
  const sql = neon(dbUrl);
  const rows = await sql`
    DELETE FROM invites
    WHERE token = ${token}
    RETURNING guest_name, token
  `;

  return rows[0] ?? null;
};

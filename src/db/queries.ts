import { neon } from "@neondatabase/serverless";

export const getAll = async (dbUrl: string) => {
  const sql = neon(dbUrl);
  return await sql`SELECT * FROM invites;`;
};

import pg from "pg";
export const pool = new pg.Pool({
  user: 'vanity',
  host: '127.0.0.1',
  password: '123456',
  database: 'users-db',
  port: '5432',
});


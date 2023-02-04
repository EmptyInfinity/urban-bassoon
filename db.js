import pg from 'pg';

export const connectDb = async () => {
  const client = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
  })
  await client.connect();
  console.log('db connected');
  return client;
}
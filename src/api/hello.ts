import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}

const sql = neon(process.env.DATABASE_URL);
 
export async function GET(request: Request) {

    const posts = await sql('SELECT * FROM playing_with_neon');
    console.log(posts);

    console.log(process.env.DATABASE_URL);
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
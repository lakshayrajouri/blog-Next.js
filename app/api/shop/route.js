import { query } from '../../../utils/postgres';

export async function GET() {
  try {
    const blog = await query('SELECT * FROM product');
    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch blog' }), {
      status: 500,
    });
  }
}


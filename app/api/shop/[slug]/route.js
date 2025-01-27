import { query } from '../../../../utils/postgres';

export async function GET(req) {
  const slug = req.url.split('/').pop();
  try {
    const blog = await query('SELECT * FROM product WHERE id = $1', [slug]);

    if (blog.length === 0) {
      return new Response(JSON.stringify({ error: 'product not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(blog[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}

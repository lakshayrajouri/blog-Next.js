import { query } from '../../../../utils/postgres';

// export async function GET(req) {
//   const slug = req.url.split('/').pop(); // Extract the slug from the URL
//   try {
//     const blog = await query('SELECT * FROM blogContent WHERE id = $1', [slug]);
//     if (blog.length === 0) {
//       return new Response(JSON.stringify({ error: 'Blog not found' }), { status: 404 });
//     }
//     return new Response(JSON.stringify(blog[0]), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error fetching blog:', error);
//     return new Response(JSON.stringify({ error: 'Failed to fetch blog' }), {
//       status: 500,
//     });
//   }
// }
export async function GET(req) {
  const slug = req.url.split('/').pop(); // Extract the slug from the URL
  console.log(slug);
  try {
    const blog = await query('SELECT * FROM blogContent WHERE id = $1', [slug]);

    if (blog.length === 0) {
      // Blog not found
      return new Response(JSON.stringify({ error: 'Blog not found' }), { status: 404 });
    }

    // Return the blog data
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

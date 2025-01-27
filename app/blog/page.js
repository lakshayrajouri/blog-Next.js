'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../styles/blog.css';

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blogContainer">
      <h1 className='blogHeaeding'>All Blogs</h1>
      
        {blogs.map((blog) => (
          <div className="blogDiv" key={blog.id}>
          <Link href={`/blog/${blog.id}`}><h3>{blog.title}</h3></Link>
      </div>
        ))}
    </div>
  );
}


// export async function getServerSideProps(context) {
//   return {
//     props: {what: "ever"},
//   }
// }

export default BlogsPage;




// const blog = () => {
//   return <div className="blogContainer">
//      <div className="blogDiv">
//       <Link href="/blog/stone1"><h3>stone</h3></Link>
//       <p>stone is a hard solid non-metallic mineral matter of which rock is made, especially as a building material.</p>  
//      </div>
//      <div className="blogDiv">
//       <h3>stone</h3>
//       <p>stone is a hard solid non-metallic mineral matter of which rock is made, especially as a building material.</p>  
//      </div>
//      <div className="blogDiv">
//       <h3>stone</h3>
//       <p>stone is a hard solid non-metallic mineral matter of which rock is made, especially as a building material.</p>  
//      </div>
//      <div className="blogDiv">
//       <h3>stone</h3>
//       <p>stone is a hard solid non-metallic mineral matter of which rock is made, especially as a building material.</p>  
//      </div>
//      <div className="blogDiv">
//       <h3>stone</h3>
//       <p>stone is a hard solid non-metallic mineral matter of which rock is made, especially as a building material.</p>  
//      </div>
//     </div>;
// }
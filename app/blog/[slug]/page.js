'use client';

import { useEffect, useState } from 'react'; 
import { useParams } from 'next/navigation';
import '../../styles/blog.css';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) {
          throw new Error(`Blog not found: ${response.status}`);
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlog();
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blogContainer">
      <h3>{blog.title}</h3>
      <p>content: {blog.content}</p>
    </div>
  );
}

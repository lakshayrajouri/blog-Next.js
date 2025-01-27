'use client';

import { useEffect, useState } from 'react'; 
import { useParams } from 'next/navigation';
import '../../styles/shop.css';

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchShop = async () => {
      const response = await fetch(`/api/shop/${slug}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchShop();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetails">
      <h3>{product.category}</h3>
      <p>{product.description}</p>
    </div>
  );
}

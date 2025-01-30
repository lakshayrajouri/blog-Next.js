import ShopClient from './ShopClient';

// Server-side function to fetch products
async function getProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/shop', {
      cache: 'no-store', // Ensures fresh data on each request
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching shop data:", error);
    return [];
  }
}

export default async function ShopPage() {
  const products = await getProducts(); // Fetch products on the server
  return <ShopClient products={products} />; // Pass data to the client component
}

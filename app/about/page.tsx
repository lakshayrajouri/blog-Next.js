'use client';

import React from "react";

function About() {
  return (
    <main >
      <style jsx>{`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    background-color: #333;
    padding: 10px 0;
}

main {
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.about-section h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

h3 {
    font-size: 2rem;
    margin-top: 20px;
    color: #555;
}

p {
    
    line-height: 1.8;
    color: #666;
    margin: 0 1rem;
}

ul {
    list-style-type: none;
    padding-left: 20px;
}

.about-section ul li {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
}

.about-section a {
    color: #007BFF;
    text-decoration: none;
}

.about-section a:hover {
    text-decoration: underline;
}
      `}</style>
      <div>
        <h3>About</h3>
        <p>Welcome to Jai Maa Kalka Traders, your one-stop destination for all things related to Gemstones. Based in Haryana, India, we are dedicated to offering the best quality products to our customers. Whether you're here to shop or to learn more through our blog, we strive to provide valuable content and excellent customer service</p>
      </div>
      <div>
        <h3>Our Mission</h3>
        <p>At Jai Maa Kalka Traders, our mission is simple: to provide high-quality products at affordable prices while supporting local businesses and promoting sustainable practices. We believe in fostering long-term relationships with our customers, offering them a seamless shopping experience both online and offline.</p>
      </div>
      <div>
        <h3>Our Team</h3>
        <p>Our team is made up of passionate individuals who are dedicated to helping you find the perfect product. From our customer service representatives to our warehouse staff, each team member plays a vital role in ensuring your satisfaction. We are committed to providing a positive and inclusive work environment where everyone is valued and respected.</p>
        <ul>
          <li>Praveen Acharya</li>
          <li>Narendra</li>
        </ul>
      </div>
      <div>
        <h3>Why choose us?</h3>
        <p>When you shop with Jai Maa Kalka Traders, you can expect:</p>
        <ul>
            <li><strong>Quality Assurance:</strong> We handpick the best products to ensure the highest quality.</li>
            <li><strong>Customer-Centric:</strong> Your satisfaction is our priority. We offer excellent customer service and support.</li>
            <li><strong>Affordable Prices:</strong> Get great products at competitive prices without compromising on quality.</li>
            <li><strong>Sustainable Practices:</strong> We are committed to sustainability and eco-friendly solutions in our sourcing and operations.</li>
            <li><strong>Money Back Guarantee:</strong> We guarantee money back</li>
            <li><strong>Door Step Delivery:</strong> we have partenered with Delhivery</li>
        </ul>
      </div>
      <div>
        <h3>Connect With Us</h3>
        <p>We’d love to hear from you! Whether you have questions about our products, need advice, or just want to say hello, feel free to reach out via our <a href="/contact">Contact Us</a> page or follow us on social media.</p>
      </div>
    </main>
  );
}

export default About;
import React from 'react';
import Navbar from './Navbar'
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg max-w-3xl text-center mb-8">
        Welcome to our app! We are dedicated to providing the best experience for our users. Our platform offers a curated selection of delicious dishes, seamless ordering, and exceptional customer service. We believe in quality, convenience, and making your life easier with every click.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to bring you the best dishes, handpicked from top chefs and local eateries. We aim to create a platform where ordering food is not just easy but enjoyable and rewarding.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">High-quality, delicious meals delivered quickly</li>
          <li className="mb-2">User-friendly interface and easy ordering process</li>
          <li className="mb-2">Exclusive deals and a rewarding loyalty program</li>
        </ul>
      </div>
    </div>

    </>

  );
};

export default About;

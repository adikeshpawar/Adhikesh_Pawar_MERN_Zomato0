import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our App!</h1>
        <p className="text-lg text-center mb-6 max-w-lg">
          Discover the best dishes from our curated menu! Sign up today to start your culinary journey with us.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Delicious Dishes</h2>
            <p>Our menu offers a variety of carefully selected dishes that will satisfy your taste buds!</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Easy Ordering</h2>
            <p>Order your favorite meals with just a few clicks, and enjoy fast delivery to your doorstep!</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
            <p>We are here to help you! Our support team is available 24/7 to assist you with any questions.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Rewards Program</h2>
            <p>Join our rewards program and earn points for every order. Redeem them for discounts and exclusive offers!</p>
          </div>
        </div>

        <div className="space-x-4">
          <NavLink to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </NavLink>

          <NavLink to="/signup">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Signup
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;

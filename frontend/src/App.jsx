// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/Loginform';
import SignupForm from './components/SignUpfrom';
import FoodItemsPage from './components/FoodItemPage'; // Import the food items page
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/food" element={<FoodItemsPage />} /> {/* Route for food items page */}
        <Route path="/contact" element={<Contact />} /> {/* Route for food items page */}
        <Route path="/about" element={<About />} /> {/* Route for food items page */}
      </Routes>
    </Router>
  );
};

export default App;

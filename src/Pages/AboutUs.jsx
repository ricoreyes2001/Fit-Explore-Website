import React from "react";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  return (
    <div className="hero bg-[#FFFAFB] min-h-screen">
      <div className="space h-20"></div>
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-['Josefin_Sans']">
          Welcome to the <strong>Fit Explore</strong>. Our goal is to provide a clean, easy-to-use,
          and modern fitness platform where users can learn exercises, build workout plans,
          and track their progress.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Exercise Library</h3>
            <p className="text-gray-700">
              Browse a variety of exercises sorted by muscle group and difficulty.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Custom Plans</h3>
            <p className="text-gray-700">
              Create and follow workout plans tailored to your goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-gray-700">
              Log your workouts and view your improvements over time.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <h3 className="text-xl font-bold">Coach Paul Padasas</h3>
            <p className="text-gray-600">Certified Trainer</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-xl font-bold">Coaches Mark Navarra & Rico Reyes</h3>
            <p className="text-gray-600">Mobility & Strength Expert</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-xl font-bold">Coaches Karl Christian Canlas & Dharellene Mae Selfaison</h3>
            <p className="text-gray-600">Nutrition Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

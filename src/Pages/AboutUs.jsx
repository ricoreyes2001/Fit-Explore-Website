import React from "react";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  const teamMembers = [
    { name: "Paul Padasas", role: "Certified Trainer" },
    { name: "Mark Navarra & Rico Reyes", role: "Mobility & Strength Expert" },
    { name: "Karl Christian Canlas & Dharellene Mae Selfaison", role: "Nutrition Specialist" },
  ];

  const features = [
    {
      title: "Exercise Library",
      desc: "Browse a variety of exercises sorted by muscle group and difficulty."
    },
    {
      title: "Custom Plans",
      desc: "Create and follow personalized workout plans tailored to your goals."
    },
    {
      title: "Progress Tracking",
      desc: "Log your workouts and view your improvements and history over time."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Main Page Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="text-orange-500">Fit-Explore</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Fit-Explore is a modern fitness platform designed to help people learn new exercises, 
          create workout plans, monitor progress, and build a healthier lifestyle with ease.
        </p>

        {/* Features */}
        <h2 className="text-3xl font-bold text-orange-500 mb-6">What We Offer</h2>

        <div className="space-y-8 mb-16">
          {features.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Meet Our Team</h2>

        <div className="space-y-8">
          {teamMembers.map((member, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  const teamMembers = [
    { name: "Paul Padasas", role: "Certified Trainer" },
    { name: "Mark Navarra & Rico Reyes", role: "Mobility & Strength Expert" },
    { name: "Karl Christian Canlas & Dharellene Mae Selfaison", role: "Nutrition Specialist" },
  ];

  const features = [
    { title: "Exercise Library", desc: "Browse a variety of exercises sorted by muscle group and difficulty." },
    { title: "Custom Plans", desc: "Create and follow workout plans tailored to your goals." },
    { title: "Progress Tracking", desc: "Log your workouts and view your improvements over time." },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-6 py-20 text-white">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-center font-['Josefin_Sans']">
            Welcome to <strong>Fit Explore</strong>. Our goal is to provide a clean, easy-to-use, and modern fitness platform where users can learn exercises, build workout plans, and track their progress.
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center text-black">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-md text-black">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

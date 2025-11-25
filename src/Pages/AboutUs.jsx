import React from "react";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  const teamMembers = [
    { name: "Paul Padasas", role: "Certified Trainer" },
    { name: "Mark Navarra & Rico Reyes", role: "Mobility & Strength Expert" },
    {
      name: "Karl Christian Canlas & Dharellene Mae Selfaison",
      role: "Nutrition Specialist",
    },
  ];

  const features = [
    {
      title: "Exercise Library",
      desc: "Browse a variety of exercises sorted by muscle group and difficulty.",
    },
    {
      title: "Custom Plans",
      desc: "Create and follow workout plans tailored to your goals.",
    },
    {
      title: "Progress Tracking",
      desc: "Log your workouts and view your improvements over time.",
    },
  ];

  return (
    <div className="relative min-h-screen font-[Poppins]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 py-20 text-white">
          <h1 className="text-5xl font-bold text-center mb-8 tracking-wide">
            About Us
          </h1>

          <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed text-gray-200 font-['Josefin_Sans'] mb-16">
            Welcome to <strong>Fit Explore</strong> — your clean, modern, and
            easy-to-use fitness platform. Learn exercises, create workout plans,
            and track your progress with simplicity and style.
          </p>

          {/* What We Do */}
          <h2 className="text-3xl font-semibold text-center mb-10 tracking-wide">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/90 p-7 rounded-xl shadow-lg text-black hover:scale-105 transition transform"
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Our Team */}
          <h2 className="text-3xl font-semibold text-center mb-10 tracking-wide">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white/90 p-7 rounded-xl shadow-lg text-black hover:scale-105 transition transform"
              >
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ConnectWalletButton from "@/lib/ConnectWalletButton";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { title: "Simplicity", desc: "Make payments using only a name or voice command.", icon: "🗣️" },
    { title: "SAMA Validation", desc: "Advanced AI identity verification for secure transactions", icon: "🛡️" },
    { title: "Base Network", desc: "Lightning-fast transfers with minimal gas fees", icon: "⚡" },
    { title: "Zero Learning Curve", desc: "Intuitive for crypto beginners and experts alike", icon: "🎯" },
  ];

  const team = [
    { name: "Yamil Navia", role: "Full Stack Lead", avatar: "/img1.jpg" },
    { name: "Jhamil Mamani", role: "Backend Architect", avatar: "/img2.jpg" },
    { name: "Omar Quispe", role: "AI Engineer", avatar: "/img3.jpg" },
    { name: "Roberto Chambi", role: "Frontend Designer", avatar: "/img4.jpg" },
  ];

  const stats = [
    { number: "10K+", label: "Transactions" },
    { number: "99.9%", label: "Accuracy" },
    { number: "<1s", label: "Processing" },
    { number: "24/7", label: "Available" },
  ];

  return (
    <main className="bg-white text-gray-900 font-sans overflow-hidden">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-110 transition-transform">
              AI
            </div>
            <h1 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-ni Pay
            </h1>
          </div>
          <ul className="hidden md:flex gap-8 font-medium">
            {["Home", "About", "Features", "Team"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
          <ConnectWalletButton />
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2s"></div>
          <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4s"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4 transform hover:scale-105 transition-transform">
              ✨ The Future of Web3 Payments
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Web3 payments
              </span>
              <br />
              <span className="text-gray-900">as easy as</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                saying a name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI-ni Pay combines cutting-edge AI with blockchain technology to make Web3 payments as simple as natural conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Try Demo
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-gray-200 rounded-2xl font-semibold text-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with the latest technology to provide the smoothest Web3 payment experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 p-8 rounded-3xl hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Passionate developers building the future of Web3 payments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 p-8 rounded-3xl text-center hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of users making Web3 payments as simple as having a conversation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Now
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                AI
              </div>
              <span className="font-bold text-xl text-white">AI-ni Pay</span>
            </div>
            <div className="text-center">
              <p>&copy; {new Date().getFullYear()} AI-ni Pay. All rights reserved.</p>
              <p className="text-sm mt-1">Making Web3 payments human-friendly</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

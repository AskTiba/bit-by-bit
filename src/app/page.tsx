import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Multi Step Form",
    href: "./challenges/multi-step-form",
    bg: "from-[#3d405b] to-[#2f3146]",
  },
  {
    title: "Tic Tac Toe",
    href: "./challenges/tic-tac-toe",
    bg: "from-red-700 to-red-900",
  },
  {
    title: "Ecommerce Product Page",
    href: "./challenges/ecommerce-product-page",
    bg: "from-green-400 to-green-600",
  },
  {
    title: "Expense Tracker",
    href: "./challenges/expense-tracker",
    bg: "from-purple-500 to-purple-700",
  },
  {
    title: "Conference Ticket Generator",
    href: "./challenges/conference-ticket-generator",
    bg: "from-yellow-500 to-yellow-700",
  },
  {
    title: "Rest Countries API",
    href: "./challenges/rest-countries-api",
    bg: "from-blue-500 to-blue-700",
  },
  {
    title: "Rock Paper Scissors",
    href: "./challenges/rock-paper-scissors",
    bg: "from-pink-500 to-pink-700",
  },
  {
    title: "Sandbox",
    href: "./challenges/sandbox",
    bg: "from-indigo-500 to-indigo-700",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-950 p-6">
      <h1 className="text-white text-3xl font-bold mb-6 text-center">
        🚀 Frontend Mentor Challeneges
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Link
            key={idx}
            href={project.href}
            className={`bg-gradient-to-br ${project.bg} text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;

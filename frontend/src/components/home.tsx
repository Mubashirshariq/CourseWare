import React from 'react';
import HeroImage from '../assets/download.jpeg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-900 text-white py-20 px-6">
      <section className="relative flex flex-col items-center text-center">
        <div className="z-10">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Empower Your Teaching Journey
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Create, manage, and share your knowledge with the world. Our platform gives you all the tools you need to grow your audience and make an impact.
          </p>
          <button onClick={()=>{navigate('/admin/create-course')}} className="mt-8 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            Get Started
          </button>
        </div>
        <div className="mt-10 w-full md:w-3/4 lg:w-1/2 pl-6">
          <img
            src={HeroImage}
            alt="Hero Section"
            className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
      <section className="mt-20 pl-8 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2">Easy Course Creation</h3>
          <p className="text-gray-400">Quickly create and publish courses with our intuitive tools designed for creators.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2">In-Depth Analytics</h3>
          <p className="text-gray-400">Track student engagement, course performance, and optimize your content.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2">Community Support</h3>
          <p className="text-gray-400">Join a community of educators and share best practices, tips, and more.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;

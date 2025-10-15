import React from 'react';
import { Navi } from './Navi';
import Footer from './Footer';

const VisionMission = () => {
  return (
    <>
      <div className="text-black">
        <Navi textColor="black" />
      </div>
      <section className=" text-gray-800 px-6 md:px-16 py-16 space-y-16 relative overflow-hidden">

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-stone-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neutral-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>

        {/* Header Section */}
        {/* <div className="text-center relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-stone-400 rounded-full mr-3"></div>
            <span className="text-stone-700 font-semibold text-lg">Why Choose Us</span>
            <div className="w-16 h-1 bg-stone-300 rounded-full ml-3"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-stone-700">Prettyware Ceramika</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Where quality meets reliability in every piece we create
          </p>
        </div> */}

        {/* Introduction */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className=" rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Redefining Sanitaryware Excellence
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  At Prettyware Ceramika LLP, we create experiences of comfort, elegance, and durability
                  that transform modern bathrooms and living spaces.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Based in <span className="font-semibold text-blue-600">Morbi, India's ceramic hub</span>,
                  we specialize in premium sanitaryware products designed for homes, hotels, and commercial projects.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-stone-200 to-zinc-200 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-500"></div>
                <img
                  src="/image/slider_7.jpg"
                  alt="Modern bathroom"
                  className="w-full h-72 object-cover rounded-xl shadow-md transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>



        {/* Vision & Mission Side by Side */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-stone-400">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">👁️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To make Prettyware Ceramika a global brand known for innovation, trust, and exceptional quality,
                delivering products that turn everyday spaces into extraordinary experiences.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-stone-400">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To transform bathrooms and interiors into elegant, functional, and sustainable spaces through
                premium quality products and continuous innovation.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 mt-1">•</span>
                  <span>Delivering world-class sanitaryware built to last</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 mt-1">•</span>
                  <span>Driving innovation with advanced technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-500 mr-2 mt-1">•</span>
                  <span>Building strong partnerships through trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden">
        <Footer />
      </div>
    </>

  );
};

export default VisionMission;
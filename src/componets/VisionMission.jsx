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

        {/* Features Grid */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Prettyware?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Elegant Designs",
                description: "Crafted to match every taste and trend"
              },
              {
                icon: "💎",
                title: "Affordable Luxury",
                description: "Premium quality at competitive prices"
              },
              {
                icon: "🛡️",
                title: "Quality Materials",
                description: "Built to last for years of service"
              },
              {
                icon: "🚚",
                title: "Pan-India Delivery",
                description: "Reliable and timely distribution"
              },
              {
                icon: "🤝",
                title: "Trusted Partner",
                description: "Preferred by dealers and builders"
              },
              {
                icon: "⭐",
                title: "Ceramic Excellence",
                description: "From India's ceramic capital, Morbi"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-gradient-to-br from-stone-300 to-neutral-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                  <span className="text-2xl text-stone-800">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
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

        {/* Core Values */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-stone-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white">⭐</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Quality First</h3>
                  <p className="text-gray-600 text-sm">Uncompromising quality in every product</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-stone-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white">💡</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Innovation</h3>
                  <p className="text-gray-600 text-sm">Continuous improvement and modern designs</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-stone-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white">🤝</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Partnership</h3>
                  <p className="text-gray-600 text-sm">Growing together with stakeholders</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-stone-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white">🌱</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Sustainability</h3>
                  <p className="text-gray-600 text-sm">Eco-friendly manufacturing processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative z-10 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-stone-100 to-zinc-100 rounded-2xl p-8 text-stone-800 border border-stone-200">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Spaces?</h2>
            <p className="text-stone-600 mb-6">
              Experience the Prettyware difference – where quality meets reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-stone-800 text-white hover:bg-stone-700 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                View Products
              </a>
              <a
                href="/contact"
                className="border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`}</style>
      </section>
      <div className="overflow-hidden">
        <Footer />
      </div>
    </>

  );
};

export default VisionMission;
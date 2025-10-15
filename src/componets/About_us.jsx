import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Navbar_1 from './Navbar_1'
import Footer1 from './Footer1'
import { Navi } from './Navi'
import Footer from './Footer'
import Main_Image_slider from './Main_Image_slider'

export function Who_we_are() {
    const slides = [
        { src: '/image/slider_1.jpg', alt: 'Prettyware ceramic collection - slide 1' },
        { src: '/image/slider_2.jpg', alt: 'Prettyware ceramic collection - slide 2' },
        { src: '/image/slider_3.jpg', alt: 'Prettyware ceramic collection - slide 3' },
    ]

    const socialLinks = {
        facebook: 'https://www.facebook.com/people/Prettyware-Ceramika/61578722161740/',
        linkedin: 'https://www.linkedin.com/in/prettyware-ceramika-33b973377',
        instagram: 'https://www.instagram.com/prettyware_ceramika/',
        pinterest: 'https://www.pinterest.com/prettywarec/'
    }

    return (
        <>



            <Main_Image_slider textColor="black" />
            {/* <Navi /> */}
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 py-12  text-gray-800">
                {/* Hero */}
                <section className="max-w-7xl mx-auto text-center mb-10">
                    <div className="text-[#BD9C85] font-semibold uppercase text-sm mb-2">Prettyware Ceramika</div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">Who We Are — Ceramic Excellence</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">Prettyware Ceramika is a premier manufacturer of high-quality ceramic toilets and sanitaryware. We blend traditional craftsmanship with modern technology to create products that redefine bathroom experiences.</p>
                </section>

                {/* Swiper gallery */}
                <section className="max-w-7xl mx-auto mb-10">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 }
                        }}
                        pagination={{ clickable: true }}
                    >
                        {slides.map((s, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-64 md:h-80 lg:h-96 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                    <img src={s.src} alt={s.alt} className="w-full h-full object-cover" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

                {/* Company Story */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 bg-[#f8f2ee] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Established with a vision to transform bathroom spaces, Prettyware Ceramika has been at the forefront of ceramic innovation. Our journey began with a simple belief: every bathroom deserves beauty, functionality, and durability.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Today, we're recognized for our exceptional quality, innovative designs, and commitment to sustainability. Each product reflects our dedication to excellence and our passion for creating sanitaryware that stands the test of time.
                        </p>

                        <ul className="mt-6 space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="bg-[#F4EBE4] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">✓</div>
                                <div>
                                    <strong className="text-gray-800">Innovative Designs</strong>
                                    <div className="text-sm text-gray-600">Combining aesthetics with functionality for modern living spaces</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#F4EBE4] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">✓</div>
                                <div>
                                    <strong className="text-gray-800">Sustainable Manufacturing</strong>
                                    <div className="text-sm text-gray-600">Eco-friendly processes that minimize environmental impact</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#F4EBE4] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">✓</div>
                                <div>
                                    <strong className="text-gray-800">Quality Assurance</strong>
                                    <div className="text-sm text-gray-600">Rigorous testing to ensure long-lasting performance</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold mb-3">Quick Specs</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex justify-between"><span>Material</span><span className="font-medium">Premium Vitreous China</span></div>
                                <div className="flex justify-between"><span>Flush Technology</span><span className="font-medium">Dual-Flush System</span></div>
                                <div className="flex justify-between"><span>Water Usage</span><span className="font-medium">3/6.5 L</span></div>
                                <div className="flex justify-between"><span>Mounting Options</span><span className="font-medium">Floor & Wall Mount</span></div>
                                <div className="flex justify-between"><span>Warranty</span><span className="font-medium">10 Years Comprehensive</span></div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
                            <div className="space-y-3">
                                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">f</div>
                                    <span>Facebook</span>
                                </a>
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 transition-colors">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">in</div>
                                    <span>LinkedIn</span>
                                </a>
                                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-colors">
                                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">ig</div>
                                    <span>Instagram</span>
                                </a>
                                <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors">
                                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">P</div>
                                    <span>Pinterest</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products showcase */}
                <section className="max-w-7xl mx-auto mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Our Premium Collection</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="w-full h-[330px] bg-gray-100 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img
                                        src={`./image/1.jpg`}
                                        alt={`Prettyware Model ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h5 className="font-semibold text-lg mb-2">Ceramika Pro Model {i}</h5>
                                <p className="text-sm text-gray-600 mb-3">Advanced ceramic technology with elegant design</p>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Water Efficient</span>
                                    <span className="font-semibold text-[#BD9C85]">Premium</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-7xl mx-auto text-center py-12 bg-gradient-to-r from-[#f8f2ee] to-[#F4EBE4] rounded-lg mb-12">
                    <h3 className="text-2xl font-semibold mb-3">Experience the Prettyware Difference</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join thousands of satisfied customers who have transformed their bathrooms with our premium ceramic solutions.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#BD624C] hover:bg-[#a7503b] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Request Catalog
                        </button>
                        <button className="border border-[#BD624C] text-[#BD624C] hover:bg-[#BD624C] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </section>

                {/* Additional sections */}
                <section className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h4 className="text-xl font-semibold mb-3">Why Choose Prettyware</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[#BD9C85] font-bold">•</span>
                                <span>Decades of expertise in ceramic manufacturing and innovation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#BD9C85] font-bold">•</span>
                                <span>State-of-the-art production facilities with quality control at every stage</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#BD9C85] font-bold">•</span>
                                <span>Custom solutions for residential and commercial projects</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#BD9C85] font-bold">•</span>
                                <span>Global standards compliance with local manufacturing advantages</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h4 className="text-xl font-semibold mb-3">Manufacturing Excellence</h4>
                        <p className="text-gray-700 mb-4">
                            Our manufacturing process combines traditional ceramic artistry with cutting-edge technology. Each piece undergoes 27 quality checks before reaching our customers.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-bold text-lg text-[#BD624C]">1000+</div>
                                <div className="text-gray-600">Units Daily</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded">
                                <div className="font-bold text-lg text-[#BD624C]">99.2%</div>
                                <div className="text-gray-600">Quality Pass</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications & Values */}
                <section className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#f8f2ee] rounded-lg p-6 text-center">
                        <div className="w-12 h-12 bg-[#BD9C85] rounded-full flex items-center justify-center mx-auto mb-3 text-white">✓</div>
                        <h5 className="font-semibold mb-2">Certifications</h5>
                        <p className="text-sm text-gray-600">ISO 9001:2015, ISO 14001, WaterMark certified, and international quality standards compliance.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
                        <div className="w-12 h-12 bg-[#BD9C85] rounded-full flex items-center justify-center mx-auto mb-3 text-white">♻</div>
                        <h5 className="font-semibold mb-2">Sustainability</h5>
                        <p className="text-sm text-gray-600">Water recycling, energy-efficient kilns, and eco-friendly packaging as part of our green initiative.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
                        <div className="w-12 h-12 bg-[#BD9C85] rounded-full flex items-center justify-center mx-auto mb-3 text-white">⭐</div>
                        <h5 className="font-semibold mb-2">Customer Support</h5>
                        <p className="text-sm text-gray-600">Comprehensive 5-year warranty with dedicated technical support and spare parts availability.</p>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="max-w-7xl mx-auto mt-10">
                    <h4 className="text-2xl font-semibold mb-6 text-center">What Our Customers Say</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 border border-gray-200">
                            <div className="flex items-center mb-3">
                                <div className="text-yellow-400">★★★★★</div>
                                <span className="ml-2 text-sm text-gray-600">5.0 Rating</span>
                            </div>
                            <p className="text-gray-700 italic">"Prettyware Ceramika transformed our hotel's bathrooms. The quality is exceptional and their customer service is outstanding."</p>
                            <div className="mt-3 text-sm text-gray-600">— Hotel Management Group</div>
                        </div>
                        <div className="bg-white rounded-lg p-6 border border-gray-200">
                            <div className="flex items-center mb-3">
                                <div className="text-yellow-400">★★★★★</div>
                                <span className="ml-2 text-sm text-gray-600">5.0 Rating</span>
                            </div>
                            <p className="text-gray-700 italic">"As a contractor, I rely on Prettyware for all my projects. Consistent quality and reliable delivery every time."</p>
                            <div className="mt-3 text-sm text-gray-600">— Construction Company Director</div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-7xl mx-auto mt-10 mb-16">
                    <h4 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h4>
                    <div className="space-y-4">
                        <details className="bg-white rounded-lg p-4 border border-gray-200">
                            <summary className="font-semibold cursor-pointer">Do you offer custom designs and branding?</summary>
                            <div className="mt-2 text-gray-700 pl-4">Yes, we work closely with architects, designers, and businesses to create custom ceramic solutions including private labeling for large projects.</div>
                        </details>
                        <details className="bg-white rounded-lg p-4 border border-gray-200">
                            <summary className="font-semibold cursor-pointer">What is your lead time for bulk orders?</summary>
                            <div className="mt-2 text-gray-700 pl-4">Standard bulk orders typically ship within 4-8 weeks. Custom orders may require 8-12 weeks depending on specifications and quantity.</div>
                        </details>
                        <details className="bg-white rounded-lg p-4 border border-gray-200">
                            <summary className="font-semibold cursor-pointer">Do you provide international shipping?</summary>
                            <div className="mt-2 text-gray-700 pl-4">Yes, we export to multiple countries with appropriate certifications and packaging standards for safe international transit.</div>
                        </details>
                        <details className="bg-white rounded-lg p-4 border border-gray-200">
                            <summary className="font-semibold cursor-pointer">Can I visit your manufacturing facility?</summary>
                            <div className="mt-2 text-gray-700 pl-4">We welcome business partners and large clients for facility tours. Please contact our sales team to schedule a visit.</div>
                        </details>
                    </div>
                </section>


            </div>
            <div className="overflow-hidden">

                <Footer />
            </div>
        </>
    )
}

export default Who_we_are
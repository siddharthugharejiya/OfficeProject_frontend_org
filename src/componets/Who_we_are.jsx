import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Navbar_1 from './Navbar_1'
import Footer1 from './Footer1'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import { Navigation } from 'swiper/modules/navigation'
// import { Pagination } from 'swiper/modules/pagination'

export function Who_we_are() {
    const slides = [
        { src: 'https://via.placeholder.com/800x600?text=Ceramic+Toilet+1', alt: 'Ceramic Toilet 1' },
        { src: 'https://via.placeholder.com/800x600?text=Ceramic+Toilet+2', alt: 'Ceramic Toilet 2' },
        { src: 'https://via.placeholder.com/800x600?text=Ceramic+Toilet+3', alt: 'Ceramic Toilet 3' },
    ]

    return (
        <>
            <Navbar_1 />
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 py-12 bg-white text-gray-800">
                {/* Hero */}
                <section className="max-w-7xl mx-auto text-center mb-10">
                    <div className="text-[#BD9C85] font-semibold uppercase text-sm mb-2">Ceramic Toilet</div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">Who We Are — Ceramic Toilet Specialists</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">We are leaders in ceramic toilet design and manufacturing. Our products combine modern aesthetics with robust engineering for reliable, long-lasting performance.</p>
                </section>

                {/* Swiper gallery */}
                <section className="max-w-7xl mx-auto mb-10">
                    <Swiper
                        // modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }}
                    >
                        {slides.map((s, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-64 md:h-80 lg:h-96 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                                    <img src={s.src} alt={s.alt} className="w-full h-full object-cover" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

                {/* About + Specs */}
                <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 bg-[#f8f2ee] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-3">Our Expertise</h2>
                        <p className="text-gray-700 leading-relaxed">For decades we have specialized in ceramic sanitaryware — particularly toilets. Our process focuses on precision glazing, efficient water usage, and ergonomic design. Each model is engineered to meet international quality standards and to provide exceptional hygiene and comfort.</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start gap-3">
                                <div className="bg-[#F4EBE4] rounded-full w-10 h-10 flex items-center justify-center">✓</div>
                                <div>
                                    <strong>Water-efficient designs</strong>
                                    <div className="text-sm text-gray-600">Low flush volumes without compromising performance.</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#F4EBE4] rounded-full w-10 h-10 flex items-center justify-center">✓</div>
                                <div>
                                    <strong>Durability</strong>
                                    <div className="text-sm text-gray-600">Glaze and ceramic formulated for long life and scratch resistance.</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#F4EBE4] rounded-full w-10 h-10 flex items-center justify-center">✓</div>
                                <div>
                                    <strong>Hygienic surfaces</strong>
                                    <div className="text-sm text-gray-600">Glazed surfaces are easy to clean and resist bacterial growth.</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Quick Specs</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex justify-between"><span>Material</span><span>Vitreous China</span></div>
                            <div className="flex justify-between"><span>Flush Volume</span><span>3/4.5 L</span></div>
                            <div className="flex justify-between"><span>Mounting</span><span>Floor / Wall variations</span></div>
                            <div className="flex justify-between"><span>Warranty</span><span>5 years</span></div>
                        </div>
                    </div>
                </section>

                {/* Products showcase (placeholder images kept same size) */}
                <section className="max-w-7xl mx-auto mb-12">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Our Product Range</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
                                <div className="w-56 h-44 bg-gray-100 mb-3 flex items-center justify-center overflow-hidden rounded">
                                    <img src={`https://via.placeholder.com/560x440?text=Toilet+${i}`} alt={`Toilet ${i}`} className="w-full h-full object-cover" />
                                </div>
                                <h5 className="font-semibold">Ceramic Toilet Model {i}</h5>
                                <p className="text-sm text-gray-600">Efficient, elegant and built to last.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-7xl mx-auto text-center py-8">
                    <h3 className="text-2xl font-semibold mb-3">Ready to choose the best?</h3>
                    <p className="text-gray-600 mb-4">Contact our sales team for bulk orders, technical specifications, and custom designs.</p>
                    <button className="bg-[#BD624C] hover:bg-[#a7503b] text-white px-6 py-3 rounded-md">Contact Sales</button>
                </section>

                {/* Additional sections requested by user */}
                <section className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-6">
                        <h4 className="text-xl font-semibold mb-3">Why Choose Us</h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Specialized focus on ceramic sanitaryware with strong R&D backing.</li>
                            <li>High-precision glazing and finishing for long-term durability.</li>
                            <li>Optimized water-efficiency that meets international standards.</li>
                            <li>Flexible manufacturing for custom projects and bulk orders.</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                        <h4 className="text-xl font-semibold mb-3">Manufacturing & QA</h4>
                        <p className="text-gray-700">Our production lines follow strict quality control at every stage — molding, firing, glazing and final inspection. We perform pressure and leakage tests, glaze adhesion checks, and visual inspections to ensure every unit meets our specifications.</p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#f8f2ee] rounded-lg p-6 text-center">
                        <h5 className="font-semibold mb-2">Certifications</h5>
                        <p className="text-sm text-gray-600">ISO 9001, WaterSense-equivalent certifications, and regional sanitaryware approvals.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                        <h5 className="font-semibold mb-2">Sustainability</h5>
                        <p className="text-sm text-gray-600">We minimize waste in production, recycle water where possible, and use eco-friendlier packaging.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                        <h5 className="font-semibold mb-2">Warranty & Support</h5>
                        <p className="text-sm text-gray-600">Comprehensive warranty, spare parts availability, and technical support for installers.</p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto mt-10">
                    <h4 className="text-2xl font-semibold mb-4 text-center">What customers say</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-700">“Excellent product quality and very responsive support. Our projects now specify their models by default.”</p>
                            <div className="mt-3 text-sm text-gray-600">— A. Contractor, Project Manager</div>
                        </div>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-700">“Durable and beautiful finish. Installation is straightforward and performance is great.”</p>
                            <div className="mt-3 text-sm text-gray-600">— R. Retailer</div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto mt-10 mb-16">
                    <h4 className="text-2xl font-semibold mb-4 text-center">Frequently asked questions</h4>
                    <div className="space-y-4">
                        <details className="bg-white rounded-lg p-4">
                            <summary className="font-semibold">Do you offer custom designs?</summary>
                            <div className="mt-2 text-gray-700">Yes — we can work with architects and contractors on custom shapes, finishes and bulk packaging.</div>
                        </details>
                        <details className="bg-white rounded-lg p-4">
                            <summary className="font-semibold">What is your lead time for bulk orders?</summary>
                            <div className="mt-2 text-gray-700">Lead times vary based on order size and finish; typical bulk lead times are 6–12 weeks from order confirmation.</div>
                        </details>
                        <details className="bg-white rounded-lg p-4">
                            <summary className="font-semibold">Can I get technical drawings?</summary>
                            <div className="mt-2 text-gray-700">Yes, we provide CAD and PDF drawings for installers and planners upon request.</div>
                        </details>
                    </div>
                </section>
            </div>
            <Footer1 />
        </>

    )
}

export default Who_we_are

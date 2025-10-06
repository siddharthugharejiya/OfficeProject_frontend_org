import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <>
            <footer className="bg-[#333] text-[#999] py-12 px-6" data-aos="fade-up">
                <div className="max-w-[1300px] mx-auto grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {/* Contact Info */}
                    <div data-aos="fade-right">
                        <h1 className='uppercase text-white font-bold mb-4'>Contact Info</h1>
                        <p className='uppercase mb-1'>Store Location</p>
                        <address className='not-italic leading-6'>
                            Head office
                            322,third floor, ishan business center, <br /> B/H ishan ceramic zone
                            Lalpar morbi, 363642

                        </address>
                        <p className='uppercase mt-4 mb-1'>Email Us</p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=Info@prettywareceramikallp.com&su=Enquiry&body=Hello, I want to know more about your products."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Info@prettywareceramikallp.com
                        </a>



                    </div>

                    {/* Support */}
                    <div data-aos="fade-up">
                        <h1 className='text-white text-lg font-semibold mb-4'>Need Support?</h1>
                        <a href="tel:9879800170" className='flex items-center gap-2'>
                            <div className='bg-[#BD9C85] h-10 w-10 rounded-full flex justify-center items-center'>
                                <i className="fa-solid fa-phone text-white text-sm"></i>
                            </div>
                            <span className='text-white text-sm'>9879800170</span>
                        </a>

                    </div>

                    {/* Useful Links */}
                    <div data-aos="fade-left">
                        <h1 className='uppercase text-white font-bold mb-4'>Useful Links</h1>
                        <ul className='space-y-2 text-sm'>
                            <li>Legal & Privacy</li>
                            <li>Contact</li>
                            <li>Gift Card</li>
                            <li>Customer Service</li>
                            <li>My Account</li>
                            <li>Find a Store</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div data-aos="fade-left">
                        <h1 className='uppercase text-white font-bold mb-4'>Company</h1>
                        <ul className='space-y-2 text-sm'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>News</li>
                            <li>Investors</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    {/* My Account */}
                    <div data-aos="fade-left">
                        <h1 className='uppercase text-white font-bold mb-4'>My Account</h1>
                        <ul className='space-y-2 text-sm'>
                            <li>Sign In</li>
                            <li>View Cart</li>
                            <li>Wishlist</li>
                            <li>Track Order</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-xs text-[#777] mt-10 border-t border-[#444] pt-6" >
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer

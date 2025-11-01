import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

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
                <div className="max-w-[1300px] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {/* Contact Info */}
                    <div data-aos="fade-right">
                        <h1 className='uppercase text-white font-bold mb-4'>Contact Info</h1>
                        <p className='uppercase mb-1'>Store Location</p>
                        <address className='not-italic leading-6 text-[16px]'>
                            Head Office
                            322, Third Floor, <br /> Ishan Business Center,  <br /> B/H Ishan Ceramic Zone <br />
                            Lalpar - Morbi, 363642

                        </address>




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



                        <p className='uppercase mt-4 mb-1'>Gmail Us</p>
                        <div className='flex items-center' >
                            <div className='bg-[#BD9C85] h-10 w-10 rounded-full flex justify-center items-center'>
                                <i class="fa-solid fa-envelope text-white text-sm"></i>
                                {/* <i className="fa-solid fa-phone text-white text-sm"></i> */}
                            </div>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=prettywareceramika@gmail.com&su=Enquiry&body=Hello, I want to know more about your products."
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-white text-sm ml-1'
                            >
                                prettywareceramika@gmail.com
                            </a>
                        </div>

                    </div>

                    {/* Useful Links */}
                    {/* <div data-aos="fade-left">
                        <h1 className='uppercase text-white font-bold mb-4'>Useful Links</h1>
                        <ul className='space-y-2 text-sm'>
                            <li>Legal & Privacy</li>
                            <li>Contact</li>
                            <li>Gift Card</li>
                            <li>Customer Service</li>
                            <li>My Account</li>
                            <li>Find a Store</li>
                        </ul>
                    </div> */}

                    {/* Company */}
                    {/* <div data-aos="fade-left">
                        <h1 className='uppercase text-white font-bold mb-4'>Company</h1>
                        <ul className='space-y-2 text-sm'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>News</li>
                            <li>Investors</li>
                            <li>FAQs</li>
                        </ul>
                    </div> */}

                    {/* My Account */}
                    <div data-aos="fade-left">
                        <h1 className='uppercase text-white font-bold mb-4'>My Account</h1>
                        <ul className='space-y-2 text-[16px] flex flex-col'>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/new">New Arrivals</Link>
                            {/* <Link to="/v">Vision And Mission</Link> */}
                            {/* <Link to="/Product">Product</Link> */}
                            <Link to="/contact">Contact</Link>
                            {/* <li>Track Order</li> */}
                            {/* <li>Help</li> */}
                        </ul>
                    </div>
                    <div>
                        <h1 className='uppercase text-white font-bold mb-4'>Connect with us</h1>
                        <div className="flex gap-2">

                            {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=61578722161740" target="_blank" rel="noopener noreferrer">
                                <div className="w-[42px] h-[42px] rounded-full border flex justify-center items-center
        transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                                    style={{ borderColor: 'rgba(153, 153, 153, 0.1)' }}>
                                    <i className="fa-brands fa-facebook-f text-sm"></i>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/prettyware-ceramika-33b973377" target="_blank" rel="noopener noreferrer">
                                <div className="w-[42px] h-[42px] rounded-full border flex justify-center items-center
        transition-colors duration-300 hover:bg-sky-500 hover:text-white"
                                    style={{ borderColor: 'rgba(153, 153, 153, 0.1)' }}>
                                    <i className="fa-brands fa-linkedin-in text-sm"></i>
                                </div>
                            </a>

                            {/* Pinterest */}
                            <a href="https://pin.it/4GIGzi4YU" target="_blank" rel="noopener noreferrer">
                                <div className="w-[42px] h-[42px] rounded-full border flex justify-center items-center
        transition-colors duration-300 hover:bg-red-600 hover:text-white"
                                    style={{ borderColor: 'rgba(153, 153, 153, 0.1)' }}>
                                    <i className="fa-brands fa-pinterest text-sm"></i>
                                </div>
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/prettyware_ceramika" target="_blank" rel="noopener noreferrer">
                                <div className="w-[42px] h-[42px] rounded-full border flex justify-center items-center
        transition-colors duration-300 hover:bg-pink-500 hover:text-white"
                                    style={{ borderColor: 'rgba(153, 153, 153, 0.1)' }}>
                                    <i className="fa-brands fa-instagram text-sm"></i>
                                </div>
                            </a>

                            {/* Twitter (existing placeholder) */}




                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className=" text-[16px] flex-wrap  sm:px-20 px-2 flex text-white  justify-between items-center  mt-10 border-t-[#eaeaea] border-t-1 text-black pt-6" >
                    <h1>

                        Copyright © 2025 <span className=' font-semibold'>Shopio.</span>  All rights reserved
                    </h1>
                    <h1>Designed by <span className=" font-semibold">Four Sense Branding</span></h1>
                </div>
            </footer>
        </>
    )
}

export default Footer

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer1() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <>
            <div className='overflow-x-hidden'>


                <footer className=" text-[#999] py-12 px-6" data-aos="fade-up">
                    <div className="max-w-[1300px] mx-auto grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                        {/* Contact Info */}
                        <div data-aos="fade-right">
                            <h1 className='uppercase text-[#000000c2] font-bold mb-4'><img src="../image/Logo CLR.png" className='h-[30px]' alt="" /></h1>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center gap-3'>
                                    <a href="tel:9879800170" className='text-[#BF624C] text-3xl hover:underline'>
                                        9879800170
                                    </a>
                                </div>

                            </div>

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=Info@prettywareceramikallp.com&su=Enquiry&body=Hello, I want to know more about your products."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Info@prettywareceramikallp.com
                            </a>
                        </div>




                        <div data-aos="fade-left">
                            <h1 className='uppercase text-[#000] font-bold mb-4'>Useful Links</h1>
                            <ul className='space-y-2 text-md text-[#666]'>
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
                            <h1 className='uppercase text-[#000] font-bold mb-4'>Company</h1>
                            <ul className='space-y-2 text-md text-[#666]'>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>News</li>
                                <li>Investors</li>
                                <li>FAQs</li>
                            </ul>
                        </div>

                        {/* My Account */}
                        <div data-aos="fade-left">
                            <h1 className='uppercase text-[#000] font-bold mb-4'>My Account</h1>
                            <ul className='space-y-2 text-md text-[#666]'>
                                <li>Sign In</li>
                                <li>View Cart</li>
                                <li>Wishlist</li>
                                <li>Track Order</li>
                                <li>Help</li>
                            </ul>
                        </div>

                        {/* Useful Links */}
                        <div data-aos="fade-left">
                            <h1 className='uppercase text-[#000] font-bold mb-4'>Connect with us</h1>
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
                                <a href="https://twitter.com/clientname" target="_blank" rel="noopener noreferrer">
                                    <div className="w-[42px] h-[42px] rounded-full border flex justify-center items-center
        transition-colors duration-300 hover:bg-sky-400 hover:text-white"
                                        style={{ borderColor: 'rgba(153, 153, 153, 0.1)' }}>
                                        <i className="fa-brands fa-twitter text-sm"></i>
                                    </div>
                                </a>

                          

                            </div>
                        </div>

                    </div>


                    {/* Footer Bottom */}
                    <div className=" text-md flex-wrap  sm:px-20 px-2 flex  justify-between items-center  mt-10 border-t-[#eaeaea] border-t-1 text-black pt-6" >
                        <h1>

                            Copyright © 2025 <span className='text-[#BF624C] font-semibold'>Shopio.</span>  All rights reserved
                        </h1>
                        <h1>Designed by <span className="text-[#BF624C] font-semibold">Four Sense Branding</span></h1>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer1

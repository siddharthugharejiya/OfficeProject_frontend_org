import React, { useState } from "react";
// import Nav from "./Nav";
import Navbar_1 from "./Navbar_1";
import Footer1 from "./Footer1";
import { Navi } from "./Navi";
import Footer from "./Footer";

function Contect() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "file") {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message sent successfully!");
        // Future: connect to backend API
    };

    return (
        <>
            <Navi textColor="black" />
            <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
                {/* 🔹 Map Section */}
                <div className="w-full h-[400px] overflow-hidden">
                    <iframe
                        title="Client Office Map"

                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1838.8420994244123!2d70.86961843848967!3d22.814162767205055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d77537d5241%3A0x885fbb57aefb9a11!2sIshan%20business%20centre!5e0!3m2!1sen!2sin!4v1759906805864!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        className="border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>


                {/* 🔹 Contact Form Section */}
                <div className="bg-gray-5   c `78900 p-6 md:p-10">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Send A Message</h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <label className="block mb-1 font-medium">Customer Service</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b86c59]"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 font-medium">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b86c59]"
                                required
                            />
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="block mb-1 font-medium">Attachment (optional)</label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-1 font-medium">How Can We Help?</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message..."
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b86c59] h-32 resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#b86c59] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#a85a4b] transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="overflow-hidden">
                <Footer />
            </div>
            {/* <Footer1 /> */}
        </>
    );
}

export default Contect;

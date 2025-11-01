import React, { useState } from "react";
// import Nav from "./Nav";
import Navbar_1 from "./Navbar_1";
import Footer1 from "./Footer1";
import { Navi } from "./Navi";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

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
                <div className="w-full h-[400px] overflow-hidden relative">
                    {/* Skeleton Loader */}
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex flex-col items-center justify-center z-10">
                        <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
                        <div className="mt-4 bg-gray-300 h-4 w-40 rounded"></div>
                        <div className="mt-2 bg-gray-300 h-3 w-24 rounded"></div>
                        <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
                        <div className="grid grid-cols-3 gap-2 mt-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-8 w-8 bg-gray-300 rounded"></div>
                            ))}
                        </div>
                    </div>
                    
                    <iframe
                        title="Client Office Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1838.8420994244123!2d70.86961843848967!3d22.814162767205055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d77537d5241%3A0x885fbb57aefb9a11!2sIshan%20business%20centre!5e0!3m2!1sen!2sin!4v1759906805864!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        className="border-0 relative z-20"
                        allowFullScreen=""
                        loading="lazy"
                        onLoad={(e) => {
                            // Hide skeleton when iframe is loaded
                            e.target.previousSibling.style.display = 'none';
                        }}
                    ></iframe>
                </div>


                {/* 🔹 Contact Form Section */}
               <ContactForm />
            </div>
            <div className="overflow-hidden">
                <Footer />
            </div>
            {/* <Footer1 /> */}
        </>
    );
}

export default Contect;

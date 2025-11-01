import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Replace below values with your actual EmailJS IDs
        const serviceID = "service_gpnxb5o"; // e.g. service_yourgmail
        const templateID = "template_ps5rvia"; // e.g. template_contact
        const publicKey = "zyJcXrgyiDqK_Wh3S"; // ✅ Your public key only

        emailjs
            .send(serviceID, templateID, formData, publicKey)
            .then(
                (result) => {
                    alert("✅ Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    alert("❌ Failed to send message. Please try again!");
                    console.error(error);
                }
            );
    };

    return (
        <div className="bg-gray-50 p-6 md:p-10 rounded-md shadow">
            <h2 className="text-2xl font-semibold mb-6 text-center">Send A Message</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
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
    );
};

export default ContactForm;

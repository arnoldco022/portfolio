import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [modal, setModal] = useState({ isVisible: false, message: "", success: true });

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_1tq57ni";
        const templateID = "template_dauxz7s";
        const userID = "JP4zqbPau1_lBwyRg";

        emailjs
            .send(serviceID, templateID, formData, userID)
            .then(
                () => {
                    setModal({
                        isVisible: true,
                        message: "Message sent successfully! I’ll get back to you soon.",
                        success: true,
                    });
                },
                () => {
                    setModal({
                        isVisible: true,
                        message: "Failed to send the message. Please try again later.",
                        success: false,
                    });
                }
            );

        setFormData({ name: "", email: "", message: "" });
    };

    const closeModal = () => setModal({ ...modal, isVisible: false });

    return (
        <section className="bg-gradient-to-br from-cream to-light overflow-hidden py-16 px-6 md:px-20" id="contact">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
                    <span className="bg-gradient-to-r from-burnt-orange to-orange-500 text-gray-800 bg-clip-text">
                        Let's Talk
                    </span>
                </h2>
                <div className="w-20 h-1 bg-orange-400 mx-auto my-4 rounded-full"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Have a project in mind? Let’s connect and create something amazing together!
                </p>
            </div>
            <form
                className="max-w-2xl mx-auto bg-white shadow-2xl p-8 rounded-lg space-y-6 relative overflow-hidden"
                onSubmit={handleSubmit}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-orange-50 rounded-lg blur-2xl"></div>
                <div className="relative">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-4 rounded-full border border-gray-300 focus:ring-burnt-orange focus:border-burnt-orange transition-all"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="relative">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-4 rounded-full border border-gray-300 focus:ring-burnt-orange focus:border-burnt-orange transition-all"
                        placeholder="johndoe@example.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="relative">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full p-4 rounded-3xl border border-gray-300 focus:ring-burnt-orange focus:border-burnt-orange transition-all"
                        placeholder="Write your message here..."
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="relative w-full py-3 bg-gradient-to-r from-orange-400 to-burnt-orange text-white font-semibold rounded-full shadow-md hover:bg-orange-500 transition-all duration-300"
                >
                    Send Message
                </button>
            </form>
            {modal.isVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full text-center shadow-lg relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            ✖
                        </button>
                        <h3
                            className={`text-xl font-bold mb-4 ${
                                modal.success ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {modal.success ? "Success" : "Error"}
                        </h3>
                        <p className="text-gray-700">{modal.message}</p>
                        <button
                            onClick={closeModal}
                            className="mt-6 py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

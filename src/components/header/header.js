import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleNavClick = (id) => {
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', id);
        }
    };

    return (
        <div className="relative flex items-center justify-between h-screen p-10 md:p-28 bg-gradient-to-br from-cream to-light-brown overflow-hidden" id="home">
            <div
                className={`w-full md:w-1/2 text-left transform transition-all duration-1000 ease-out ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50px]"
                }`}
            >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    I'm <span className="text-burnt-orange">Arnold Co</span>
                </h1>
                <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl">
                    A developer blending creativity and code. Inspired by the warmth of coffee culture, 
                    I craft user-friendly and visually captivating digital experiences. Let’s brew something exceptional together.
                </p>
                
                <button
                    onClick={() => handleNavClick('#contact')}
                    className="mt-8 px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-burnt-orange transition-all duration-300"
                >
                    Let’s Collaborate!
                </button>

                <div className="flex mt-6 space-x-8 text-lg">
                    <a href="https://linkedin.com/in/arnold-co-356a8223a" target="_blank" rel="noreferrer"  className="text-gray-700 hover:text-burnt-orange transition-all">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/arnoldco022" target="_blank" rel="noreferrer"  className="text-gray-700 hover:text-burnt-orange transition-all">
                        <FaGithub size={24} />
                    </a>
                    <a href="mailto:arnoldco022@gmail.com" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-burnt-orange transition-all">
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
            <div
                className={`hidden md:block w-1/2 transform transition-all duration-1000 ease-out ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50px]"
                }`}
            >
                <img
                    className="w-full h-auto object-cover"
                    src={process.env.PUBLIC_URL + '/heroimg.png'}
                    alt="Cozy coffee shop"
                />
            </div>
        </div>
    );
};

export default Header;

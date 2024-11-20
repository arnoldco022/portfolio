import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPhp, FaWordpress, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiElectron } from 'react-icons/si';
import { IoLogoReact } from 'react-icons/io5';
import { motion } from 'framer-motion';

const toolsData = [
    { name: 'React', icon: <FaReact />, color: '#61DBFB', description: 'React is a JavaScript library for building user interfaces.' },
    { name: 'React Native', icon: <IoLogoReact />, color: '#61DBFB', description: 'React Native is a framework for building mobile apps using React.' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8', description: 'Tailwind is a utility-first CSS framework for fast UI development.' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063', description: 'Node.js enables JavaScript for server-side applications.' },
    { name: 'Electron.js', icon: <SiElectron />, color: '#47848F', description: 'Electron is a framework for building cross-platform desktop apps.' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26', description: 'HTML is the structure of web pages.' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6', description: 'CSS is used to style web pages.' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', description: 'Bootstrap is a framework for responsive web design.' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4', description: 'PHP is a scripting language for server-side development.' },
    { name: 'WordPress', icon: <FaWordpress />, color: '#21759B', description: 'WordPress is a platform for creating websites and blogs.' },
];

const toolboxVariants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.2 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const toolVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutMe = () => {
    const [activeTool, setActiveTool] = useState(toolsData[0]);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const mobileView = window.matchMedia("(max-width: 768px)");
        const threshold = mobileView.matches ? 0.3 : 0.5;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true);
            },
            { threshold }
        );
    
        if (sectionRef.current) observer.observe(sectionRef.current);
    
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const handleNavClick = (id) => {
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', id);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-20"
            id="about"
        >
            <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-4">About Me</h2>
                <div className="w-20 h-1 bg-orange-400 mx-auto my-4 rounded-full"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A glimpse into my journey, skills, and the technologies I use to build impactful digital experiences.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-700">Get to Know Me</h3>
                    <motion.div
                        className="space-y-6"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.5 } },
                        }}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.p
                            className="text-lg text-gray-600 leading-relaxed"
                            variants={textVariants}
                        >
                            I'm a Frontend Web Developer focused on building seamless and user-friendly digital experiences. 
                            With a passion for efficiency, I aim to create impactful web applications that contribute to the success of the overall product.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-600 leading-relaxed"
                            variants={textVariants}
                        >
                            In my free time, I explore new tools, experiment with side projects, and stay updated on the latest trends in tech. Feel free to reach out if you’re interested in discussing projects or sharing ideas.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-600 leading-relaxed"
                            variants={textVariants}
                        >
                            I’m currently open to job opportunities where I can contribute, learn, and grow. If you have a role that aligns with my skills and experience, feel free to reach out—let’s connect!
                        </motion.p>
                    </motion.div>
                    <div className="mt-8">
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-burnt-orange transition-all duration-300"
                        >
                            Let's Connect!
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-3xl font-semibold text-gray-700 mb-6">My Toolbox</h3>
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 gap-8"
                        variants={toolboxVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {toolsData.map((tool, index) => (
                            <motion.div
                                key={index}
                                onClick={() => setActiveTool(tool)}
                                className={`group cursor-pointer bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition duration-300 border ${
                                    activeTool.name === tool.name ? 'border-burnt-orange' : 'border-transparent'
                                }`}
                                variants={toolVariants}
                            >
                                <div className="text-4xl mx-auto" style={{ color: activeTool.name === tool.name ? '#D06A4B' : '#ccc' }}>
                                    {tool.icon}
                                </div>
                                <h4 className="text-center mt-4 text-lg font-medium group-hover:text-burnt-orange">
                                    {tool.name}
                                </h4>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

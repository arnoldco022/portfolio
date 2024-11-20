import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Works = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [isView, setIsView] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const mobileView = window.matchMedia("(max-width: 768px)");
        const threshold = mobileView.matches ? 0.3 : 0.4;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsView(true);
            },
            { threshold }
        );
    
        if (sectionRef.current) observer.observe(sectionRef.current);
    
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const projects = [
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio website to showcase my skills, projects, and experiences. Built with React and TailwindCSS.",
            technologies: ["React", "TailwindCSS", "JavaScript"],
            images: [
                "https://via.placeholder.com/800x400?text=Project+1+Image+1",
                "https://via.placeholder.com/800x400?text=Project+1+Image+2",
                "https://via.placeholder.com/800x400?text=Project+1+Image+2",
            ],
        },
        {
            title: "E-commerce Platform",
            description:
                "A scalable e-commerce platform with a fully integrated payment system. Features include user authentication, product search, and a responsive design.",
            technologies: ["Next.js", "Node.js", "MongoDB"],
            images: [
                "https://via.placeholder.com/800x400?text=Project+2+Image+1",
                "https://via.placeholder.com/800x400?text=Project+2+Image+2",
                "https://via.placeholder.com/800x400?text=Project+1+Image+2",
            ],
        },
        {
            title: "E-commerce Platform",
            description:
                "A scalable e-commerce platform with a fully integrated payment system. Features include user authentication, product search, and a responsive design.",
            technologies: ["Next.js", "Node.js", "MongoDB"],
            images: [
                "https://via.placeholder.com/800x400?text=Project+2+Image+1",
                "https://via.placeholder.com/800x400?text=Project+2+Image+2",
                "https://via.placeholder.com/800x400?text=Project+1+Image+2",
            ],
        },
        {
            title: "E-commerce Platform",
            description:
                "A scalable e-commerce platform with a fully integrated payment system. Features include user authentication, product search, and a responsive design.",
            technologies: ["Next.js", "Node.js", "MongoDB"],
            images: [
                "https://via.placeholder.com/800x400?text=Project+2+Image+1",
                "https://via.placeholder.com/800x400?text=Project+2+Image+2",
                "https://via.placeholder.com/800x400?text=Project+1+Image+2",
            ],
        },
    ];

    const handleViewProject = (project) => {
        setActiveProject(project);
        setShowModal(true);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section 
            className="bg-gradient-to-b from-gray-100 to-cream  py-16 px-6 md:px-20" 
            id="works" 
            ref={sectionRef}>
            <div className="text-center mb-12">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-4">My Works</h2>
                <div className="w-20 h-1 bg-orange-400 mx-auto my-4 rounded-full"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on, showcasing my expertise in web development and design.
                </p>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white rounded-lg shadow-md"
                    >
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={() => handleViewProject(project)}
                                className="inline-block px-6 py-2 bg-burnt-orange text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition-all duration-300"
                            >
                                View Project
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            {showModal && activeProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative pb-4">
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h3 className="text-3xl font-bold text-gray-800">
                                {activeProject.title}
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <Slider {...sliderSettings}>
                                {activeProject.images.map((img, idx) => (
                                    <div key={idx}>
                                        <img
                                            src={img}
                                            alt={`Slide ${idx + 1}`}
                                            className="w-full h-80 object-cover rounded-lg px-2"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </motion.div>
                </div>
            )}
        </section>
    );
};

export default Works;

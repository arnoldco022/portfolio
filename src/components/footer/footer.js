import { AiOutlineDownload } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
                <div className="text-center md:text-left w-full md:w-[45%]">
                    <h3 className="text-xl font-bold text-white mb-4">ADC-Portfolio</h3>
                    <p className="text-sm leading-relaxed">
                        I am passionate about creating solutions that bring value to your business. Contact me to turn your ideas into reality.
                    </p>
                    <a 
                        href={process.env.PUBLIC_URL + '/adc_cv.pdf'}
                        download
                        className="text-orange-400 hover:text-orange-500 md:justify-start mt-4 inline-block flex gap-2 items-center justify-center"
                    >
                        <AiOutlineDownload className="text-xl" /> Download my CV
                    </a>
                </div>
                <div className="text-center md:text-left w-full md:w-[25%]">
                    <h3 className="text-xl font-bold text-white mb-4">Contact Me</h3>
                    <ul className="space-y-2">
                        <li>
                            <span className="font-semibold">Email:</span>{" "}
                            <a href="mailto:contact@example.com" className="hover:text-orange-400 transition">
                                arnoldco022@gmail.com
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold">Phone:</span>{" "}
                            <a href="tel:+1234567890" className="hover:text-orange-400 transition">
                                +63 967-214-3987
                            </a>
                        </li>
                        <li>
                            <div className="flex mt-6 space-x-8 text-lg justify-center md:justify-start">
                                <a href="https://linkedin.com/in/arnold-co-356a8223a" target="_blank" rel="noreferrer"  className="hover:text-burnt-orange transition-all">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="https://github.com/arnoldco022" target="_blank" rel="noreferrer"  className="hover:text-burnt-orange transition-all">
                                    <FaGithub size={24} />
                                </a>
                                <a href="mailto:arnoldco022@gmail.com" target="_blank" rel="noreferrer" className="hover:text-burnt-orange transition-all">
                                    <FaEnvelope size={24} />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="my-8 border-t border-gray-700"></div>
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center justify-center text-sm">
                <p className="mb-4 md:mb-0">
                    © {new Date().getFullYear()} ADC. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

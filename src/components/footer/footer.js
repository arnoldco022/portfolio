import { AiOutlineDownload } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-4">ADC-Portfolio</h3>
                    <p className="text-sm leading-relaxed">
                        We are passionate about creating solutions that bring value to your business. Contact us to turn your ideas into reality.
                    </p>
                    <a 
                        href="/adc_cv.pdf" 
                        download
                        className="text-orange-400 hover:text-orange-500 mt-4 inline-block flex gap-2 items-center"
                    >
                      <AiOutlineDownload className="text-xl" /> Download my CV
                    </a>
                </div>
                <div className="text-left md:text-left flex justify-end">
                    <div className="flex-col">
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
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
                                <span className="font-semibold">Address:</span> 3112 Licab, Nueva Ecija
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="my-8 border-t border-gray-700"></div>
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center text-center justify-center text-sm">
                <p className="mb-4 md:mb-0">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

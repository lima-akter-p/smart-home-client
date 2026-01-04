import React from 'react';
import { FaFacebook,  FaLinkedin,  } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                {/* Logo + About */}
                <div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <img
                            src={logo}
                            alt="HomeNest Logo"
                            className="w-12 h-12 object-cover"
                        />
                        <h1 className="text-2xl font-bold text-white">HomeNest</h1>
                    </div>

                    <p className="mt-3 text-gray-400 leading-relaxed">
                        HomeNest is a real-estate listing platform where property owners can
                        post rental or sale listings. Users can easily search, filter, and
                        explore homes by location, budget, and property type.
                    </p>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                    <p>Email: support@homenest.com</p>
                    <p>Phone: +880 1234-567890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* Links + Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Quick Links
                    </h3>

                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>

                    {/* Social Media */}
                    <div className="flex items-center gap-4 mt-5 text-xl justify-center md:justify-start">
                        <a href="https://www.facebook.com/lima.akther.284949" className="hover:text-white transition-colors">
                            <FaFacebook />
                        </a>
                       
                        
                        <a href="https://github.com/lima-akter-p" className="hover:text-white transition-colors">
                            <IoLogoGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/limaakter04" className="hover:text-white transition-colors">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} HomeNest — All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;


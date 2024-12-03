import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer: React.FC = () => {
    return (
        <div className="max-w-[1240px] mt-[80px] mx-auto">
            <hr className="" />
            <div className="flex justify-between items-center px-4 py-4">
                <div className="text-[#919BBA]">
                    <p>&copy; 2023 Md Titumir Anan</p>
                </div>
                <div>
                    <ul className="flex space-x-2">
                        <li className="text-[#919BBA]">
                            <a href="#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className="text-[#919BBA]">
                            <a href="#">
                                <AiFillTwitterCircle />
                            </a>
                        </li>
                        <li className="text-[#919BBA]">
                            <a href="#">
                                <FaGithub />
                            </a>
                        </li>
                        <li className="text-[#919BBA]">
                            <a href="#">
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
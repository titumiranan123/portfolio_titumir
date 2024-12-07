import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
              <a href="https://github.com/titumiranan123">
                <FaGithub />
              </a>
            </li>
            <li className="text-[#919BBA]">
              <a href="https://www.linkedin.com/in/titumiranan">
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

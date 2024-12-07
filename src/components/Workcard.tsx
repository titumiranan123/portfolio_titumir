/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Link } from "react-router-dom";

interface WorkcardProps {
  pic: string; // Updated type for better specificity
  title: string;
  link: string;
}

const Workcard: React.FC<WorkcardProps> = ({ pic, title, link }) => {
  return (
    <div className="bg md:w-[337px] lg:w-[377px] w-[320px] p-[1px]  h-[269px] overflow-hidden line rounded-lg">
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg overflow-hidden text-[#E4E8F7]">
        <img className="w-full h-full object-cover" src={pic} alt={title} />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 opacity-0 transition-opacity duration-150 hover:opacity-100 p-6">
          <p className="text-[16px] font-medium">August 2023</p>
          <p className="text-[28px] font-bold text-center">{title}</p>
          <Link
            className=" mt-6 px-4 py-2  text-white  hover:bg-[#6919FF] transition-colors flex justify-center items-center border-[#6919FF] border hover:border-transparent rounded-lg"
            to={link}
            target="_blank"
          >
            Project Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Workcard;

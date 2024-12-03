/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Link } from "react-router-dom";

interface WorkcardProps {
  pic: any;
  title: string;
  link: string;
}

const Workcard: React.FC<WorkcardProps> = ({ pic, title, link }) => {
  return (
    <div className="bg-[linear-gradient(90deg,_rgba(202,_207,_221,_0.2)_22.4%,_#cacfdd_51.01%,_rgba(202,_207,_221,_0.2)_79.69%)] md:w-[347px] lg:w-[377px] w-[98%] p-[1px] rounded-xl h-[269px]  overflow-hidden">
      <div className="flex relative h-full w-full  flex-col items-center  justify-center  rounded-lg overflow-hidden text-[#E4E8F7]">
        <img className="w-full h-full" src={pic} alt="" />
        <div className="absolute opacity-0 hover:opacity-100 transition-all ease-in duration-150 top-0 left-0 flex justify-center items-center w-full h-full flex-col bg-black p-10 bg-opacity-75">
          <p className="text-[16px] font-[400]">August 2023</p>
          <p className="text-[28px] font-[700]">{title}</p>
          <Link className="btn mt-[26px]" to={link}>
            Project Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Workcard;

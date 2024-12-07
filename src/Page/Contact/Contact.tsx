import React from "react";
import { motion } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
const Contact: React.FC = () => {
  return (
    <div>
      <div className="max-w-[1240px] flex lg:justify-between items-center lg:flex-row flex-col mx-auto min-h-screen pt-20 gap-20">
        <motion.div
          className="lg:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Button */}
          <motion.button
            className="btn w-[180px] text-[white]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Contact
          </motion.button>

          {/* Title */}
          <motion.h2
            className="text-[48px] nunito font-bold leading-[56px] text-[#F6F7FA] mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            Need a solution ?
          </motion.h2>

          {/* Description */}
          <motion.div
            className="text-[#919BBA] -mt-2 text-[14px] "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          >
            Reach out and Let's Build
            <span className="text-[#F6F7FA] font-semibold ms-1">
              Extraordinary Together.
            </span>
          </motion.div>
          <div className="flex flex-col gap-1 mt-4">
            <div className="flex items-center justify-start text-[#919BBA] text-[16px] gap-1">
              <RiWhatsappLine /> <span> +8801750561063</span>
            </div>
            <div className="flex items-center justify-start text-[#919BBA] text-[16px] gap-1 ">
              <IoMail /> <span>titumiranan710@gmail.com</span>
            </div>
          </div>
        </motion.div>
        <div>
          <form className="flex  flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#919BBA] text-[16px]">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="text-[#919BBA] bg-[#0C1021] w-[320px] h-[44px] md:w-[445px] text-[14px] border border-[#919BBA] py-2 px-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#919BBA] text-[16px]">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="text-[#919BBA] bg-[#0C1021] w-[320px] h-[44px] md:w-[445px] text-[14px] border border-[#919BBA] py-2 px-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#919BBA] text-[16px]">Message</label>
              <textarea
                placeholder="Enter Your Message ....."
                className="text-[#919BBA] bg-[#0C1021] w-[320px]  md:w-[445px] text-[14px] border border-[#919BBA] py-2 px-3 rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="text-[#fff]  bg-[#6919FF]  nunito font-semibold text-[18px] w-[180px] rounded-full py-3 px-4 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

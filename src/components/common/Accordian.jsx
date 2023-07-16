import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const Accordian = ({ question, answere }) => {
    const [show,setShow] = useState(false);
    function handleShow() {
        setShow(!show);
    }
  return (
    <div className="text-sm md:text-md lg:text-lg bg-white my-6 p-2 md:p-6 rounded-xl">
        {/* question section */}
      <div className="flex justify-between items-center cursor-pointer gap-2" onClick={handleShow}>
        <h1>{question}</h1>
        <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`text-2xl ${show && 'rotate-180'}`}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0303 3.21967C10.7374 2.92678 10.2626 2.92678 9.96967 3.21967L6 7.18934L2.03033 3.21967C1.73744 2.92678 1.26256 2.92678 0.96967 3.21967C0.676777 3.51256 0.676777 3.98744 0.96967 4.28033L5.46967 8.78033C5.76256 9.07322 6.23744 9.07322 6.53033 8.78033L11.0303 4.28033C11.3232 3.98744 11.3232 3.51256 11.0303 3.21967Z"
            fill="black"
          />
        </svg>
        </div>
      </div>
      {/* answere section */}
      {
        <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{duration:0.3}}

            className="overflow-clip"
          >
            <p>{answere}</p>
        </motion.div>
        )}
      </AnimatePresence>
      }
    </div>
  );
};

export default Accordian;

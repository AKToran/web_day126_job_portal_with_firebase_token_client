import { motion } from "motion/react";
import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img animate={{
              y: [100, 50, 100],
              transition: { duration: 5, repeat: Infinity },
            }}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="rounded-tl-[40px] border-pink-600 rounded-br-[40kpx] border-l-8 border-b-8 shadow-2xl"
          /> 
          <motion.img animate={{
              x: [200, 100, 200],
              transition: { duration: 6, repeat: Infinity },
            }}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="rounded-tl-[40px] border-pink-600 rounded-br-[40px] border-l-8 border-b-8 shadow-2xl"
          /> 

          
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{
              x: [0, 5, 0],
              transition: { duration: 0.4, repeat: Infinity },
            }}
            className="text-3xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#ba33ff"],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            for YOu!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

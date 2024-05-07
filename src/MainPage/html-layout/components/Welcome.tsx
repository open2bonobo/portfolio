import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion";
import { AnimatedText } from "./AnimatedText ";

export const Welcome = () => {
  return (
    <section className="lg:contents xl:contents 2xl:contents h-full w-full top-0 left-0">
      <div className="relative flex flex-col h-full w-full pt-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-row items-center justify-center px-10 lg:px-20 mt-10 sm:mt-20 md:mt-15 lg:mt-40 w-full z-20 pb-32"
        >
          <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-3xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span>
                Providing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  the best{" "}
                </span>
                practices with{" "}
                <AnimatedText
                  text={".NET, ReactJS, DevOps, and more!"}
                  className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl pt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                  once={true}
                  repeatDelay={10000}
                />
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

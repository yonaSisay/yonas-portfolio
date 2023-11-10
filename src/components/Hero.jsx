import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import yoni from "../assets/yonas.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX}  flex flex-row justify-center `}>
        <div className="flex items-center">
          <div
            className="flex flex-col
        justify-center items-center "
          >
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-40  sm:h-80 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi , I'm <span className="text-[#915eff]">Yonas</span>
            </h1>

            <p
              className={`${styles.heroSubText} mt-2 text-white-100 capitalize`}
            >
              full-stack web developer from <br className="sm:block hidden" />{" "}
              Addis Ababa, Ethiopia.
            </p>
          </div>
          <img
            src={yoni}
            alt=""
            className="w-[800px] h-[800px]  object-cover"
          />
        </div>
      </div>

      <div className="absolute xs:bottom-2 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.dev>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import yoni from "../assets/yoni.jpg";
import { yonaspic } from "../assets/index";
import LottieHero from "./LottieHero";
import { Icon } from "@iconify/react";
import { Tilt } from "react-tilt";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.paddingX}  flex flex-row justify-center `}>
				<div className="flex items-center mt-60 gap-x-40">
					<div className="flex flex-col justify-center h-full gap-y-16 ">
						<div>
							<h1 className={`${styles.heroHeadText} text-white`}>
								Hi , I'm <span className="text-[#915eff]">Yonas</span>
							</h1>

							<p
								className={`text-base mt-2 w-[600px] text-secondary capitalize`}
							>
								<span className="text-[#915eff] font-medium">
									Full-Stack Developer
								</span>{" "}
								with experience in{" "}
								<span className="text-[#915eff]">React.js, Vue.js, Go,</span>{" "}
								and various technologies. Proven ability to collaborate in
								teams, build responsive web applications
							</p>
						</div>
						<div className="flex gap-x-12">
							<a
								href="#projects"
								className="p-[1px] green-pink-gradient rounded-lg hover:transform hover:translate-y-[-4px] transition-all ease-in-out duration-75 hover:shadow-md"
							>
								<button className="flex items-center px-8 py-4 text-xl rounded-lg gap-x-4 w-fit bg-tertiary ">
									<Icon icon="grommet-icons:projects" className="text-base" />
									<span>Projects</span>
								</button>
							</a>

							<a
								href="https://drive.google.com/file/d/15W3BwCGVVXalYSERaPbO8-M4VgoB2C5a/view?usp=sharing"
								target="_blank"
								className="p-[1px] 	text-xl rounded-lg hover:transform hover:translate-y-[-4px] transition-all ease-in-out duration-75 hover:shadow-md"
							>
								<button className="flex items-center px-8 py-4 text-xl rounded-lg gap-x-4 w-fit  text-black bg-[#a2a9ff]">
									<Icon icon="simple-icons:readdotcv" className="text-2xl" />
									<span>View Resume</span>
								</button>
							</a>
						</div>
					</div>
					<div className="p-[2px] green-pink-gradient rounded-[20px]">
						<img
							src={yonaspic}
							alt=""
							className="shadow-card object-cover h-[550px] w-[450px] lg:mx-0 md:mx-20 rounded-[20px] "
						/>
					</div>
				</div>
			</div>

			<div className="absolute flex items-center justify-center w-full xs:bottom-2 bottom-10">
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
							className="w-3 h-3 mb-1 rounded-full bg-secondary"
						></motion.dev>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;

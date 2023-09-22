import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc";
import yoni from "../assets/yoni.jpg";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 1000,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 leading-[30px] flex flex-col lg:flex-row lg:h-[300px]"
			>
				<img src={yoni} alt="" className="lg:mx-0 md:mx-20 rounded-xl object-contain shadow-card"/>
				<p className="text-secondary text-[17px] lg:ml-12 lg:mt-0 mt-8">
					I am a full stack developer with a passion for creating beautiful and
					functional websites. I have experience working with React,Vue, Node, and
					MongoDB. I am currently working on a project that uses the MERN and MEVN stack
					and I am looking for opportunities to expand my knowledge and skills.
					if you have any questions or would like to work together, please feel
					free to contact me.| +251963302899
				</p>
			</motion.div>

			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");

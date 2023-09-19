import React from "react";
import { socialLinks } from "../constants";
import { Tilt } from "react-tilt";
const Sidebar = () => {
	return (
		<div className="green-pink-gradient text-white  w-[80%] md:w-16 h-16 md:h-[50%] flex  items-center justify-center  fixed md:left-4  rounded-lg md:top-1/2 bottom-2 left-10 translate-x-1  transform  md:-translate-y-1/2 z-50 shadow-card">
			<div className="bg-tertiary w-[99%] h-[99%] rounded-lg flex md:flex-col gap-7 justify-center items-center">
				{socialLinks.map((link) => (
					<Tilt>
						<div
							onClick={() => window.open(link.link, "_blank")}
							key={link.id}
							className="green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={link.icon}
								alt="github"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</Tilt>
				))}
			</div>
		</div>
	);
};

export default Sidebar;

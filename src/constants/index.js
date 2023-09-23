import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	vue,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	getnet,
	aastu,
	threejs,
	github,
	linkedin,
	telegram,
	twitter,
	instagram,
	shemach,
} from "../assets";

export const socialLinks = [
	{
		id: "github",
		icon: github,
		link: "https://github.com/yonaSisay/",
		bg: "#181717",
	},
	{
		id: "linkedin",
		icon: linkedin,
		link: "https://www.linkedin.com/in/yonas-sisay-62627822a/",
		bg: "#0077B5",
	},
	{
		id: "twitter",
		icon: twitter,
		link: "https://twitter.com/FikiruSisay",
		bg: "#1DA1F2",
	},
	{
		id: "instagram",
		icon: instagram,
		link: "https://www.instagram.com/j.w.yonas/",
		bg: "#E1306C",
	},
	{
		id: "telegram",
		icon: telegram,
		link: "https://telegram.com/jwyonas",
		bg: "#0088CC",
	},
];

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React  Developer",
		icon: web,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Vue  Developer",
		icon: web,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Vue js",
		icon: vue,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Software Engineering student ",
		company_name: "AASTU",
		icon: aastu,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Studied various programming languages and technology stacks.",
			"Participated in a variety of projects, both collaboratively within a team and individually.",
			"Acquired knowledge in diverse Software Development Life Cycle (SDLC) methodologies and gained  documenting project requirements.",
			"Developed teamwork skills and gained practical experience in collaborating effectively within a group.",
		],
	},

	{
		title: "Front end Developer intern",
		company_name: "Get-net software solutions",
		icon: getnet,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing  web application using React.js and other related technologies.",
			"Collaborating with cross-functional teams ",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const projects = [
	{
		name: "Shemach",
		description:
			"simple ecommerce platform that help users to make order of product and see the product they orderd, help them to search product and checkout",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Redux",
				color: "blue-text-gradient",
			},
		],
		image: shemach,
		source_code_link: "https://github.com/yonaSisay/shemach",
		web_link: "https://shemach-612da.web.app/",
	},
];

export { services, technologies, experiences, projects };

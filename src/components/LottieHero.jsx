import React from "react";
import developmentAnimation from "../lotties/development-animation.json";
import Lottie from "react-lottie";

function LottieHero() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: developmentAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={800} width={800} />
		</div>
	);
}

export default LottieHero;

import React from "react";
import developmentAnimation from "../lotties/development-animation.json";
import Lottie from "react-lottie";

function LottieHero() {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: developmentAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={600} width={600} />
		</div>
	);
}

export default LottieHero;

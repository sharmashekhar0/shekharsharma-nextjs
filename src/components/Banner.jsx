import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/star.json";

function Banner({ className }) {
	return (
		<div className={`${className}`}>
			<Lottie className="" options={{ animationData: animationData }} />
		</div>
	);
}

export default Banner;

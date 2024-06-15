import React from "react";
import GitHubCalendar from "react-github-calendar";

function Contribution() {
	return (
		<div className="h-96 flex flex-col px-28 gap-8">
			<span className="text-5xl text-white font-bold">
				Github Heatmap.
			</span>
			<div className="h-full w-full text-white font-medium text-xl ">
				<GitHubCalendar username="sharmashekhar0" />
			</div>
		</div>
	);
}

export default Contribution;

"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						
						<p className="my-3.5">
						Welcome to my corner of the web! I'm Arnav Shah a passionate third-year student pursuing a degree in Computer Science at SRM Institute of Science & Technology. 
						My journey into the world of development began with an exciting foray into the Think Digital Club, 
						where I immersed myself in Flutter and began crafting a plethora of innovative apps. Fuelled by curiosity, 
						I delved deeper into the realm of web development upon joining the Alexa Developers Club, mastering HTML, CSS, and JavaScript.
						</p>
						<p className="my-3.5">
						My quest for knowledge led me to Excelsoft Technologies, 
						where I honed my skills in Angular and .NET, 
						creating a dynamic employee management website during an enriching internship. 
						Eager to broaden my horizons, I embraced Next.js, 
						leveraging its power to craft immersive websites while contributing my expertise as the Technical Head at Newton School Coding Club, SRM.
						</p>
						
						<p className="my-3.5">
						Currently, I'm embarking on an exciting journey with the Samsung Prism Project, 
						delving into the realms of machine learning. With each project, 
						I strive to push boundaries, learn, and innovate, driven by an insatiable passion for technology and a relentless pursuit of excellence. 
						Join me as I continue to explore, create, and make a meaningful impact in the world of computer science.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

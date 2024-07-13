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
    Welcome to my corner of the web! I'm Arnav Shah, a passionate final-year student pursuing a degree in Computer Science at SRM Institute of Science & Technology. My journey into the world of development began with an exciting foray into the Think Digital Club, where I immersed myself in Flutter and began crafting a plethora of innovative apps. Fueled by curiosity, I delved deeper into the realm of web development upon joining the Alexa Developers Club, mastering HTML, CSS, and JavaScript.
</p>
<p className="my-3.5">
    My quest for knowledge led me to Excelsoft Technologies, where I honed my skills in Angular and .NET, creating a dynamic employee management website during an enriching internship. Eager to broaden my horizons, I embraced Next.js, leveraging its power to craft immersive websites while contributing my expertise as the Technical Head at Newton School Coding Club, SRM.
</p>
<p className="my-3.5">
    I gained further experience through internships at Infosys, working on iOS application development with Swift and Firebase, and at the Samsung R&D Institute, where I focused on machine learning with Python, TensorFlow, and OpenCV. My work included leading the development of the 'MedNex' app and contributing to the 'Monochrome Augmented Low-Light Image Enhancement' project, which is in the process of being published as a research paper.
</p>
<p className="my-3.5">
    Currently, I'm continuing to explore the realms of machine learning and artificial intelligence, striving to push boundaries, learn, and innovate. Join me as I continue to explore, create, and make a meaningful impact in the world of computer science.
</p>

					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

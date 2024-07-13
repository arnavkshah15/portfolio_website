import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import { HeadingDivider, Loader } from "components";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../project/components/Projects";
import { SITE_ROUTES } from "../../../constants";
import { customProjects } from "../../project/projectdata"; // Adjust the path as per your project structure

export function ProjectsSection() {
    const btnRef = useRef(null);
    const isBtnInView = useInView(btnRef, { once: true });

    // Use customProjects imported from projectsData.js
    const projects = customProjects;

    return (
        <LazyMotion features={domAnimation}>
            <section id="projects" className="section">
                <HeadingDivider title="Latest projects" />
                <div className="h-10 md:h-14" />

                <div className="flex flex-col items-center gap-8 md:gap-14">
                    <Suspense
                        fallback={
                            <div className="flex-center">
                                <Loader />
                            </div>
                        }
                    >
                        <ErrorBoundary FallbackComponent={Error}>
                            <Projects projects={projects} />
                        </ErrorBoundary>
                    </Suspense>

                    
                </div>
            </section>
        </LazyMotion>
    );
}

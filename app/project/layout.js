"use client";

import { Suspense, useState } from "react";
import { Projects } from "./components/Projects";
import { customProjects } from "./projectdata"; // Adjust the path as per your project structure

export default function Page() {
    return (
        <div className="container-md">
            <section id="projects" className="section">
                {/* Other components or sections */}
                <Projects projects={customProjects} />
            </section>
        </div>
    );
}

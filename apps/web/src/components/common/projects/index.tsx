"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useBreakpoint from "use-breakpoint";

import type { ProjectModal } from "./types";
import { projects } from "./constants";
import ProjectItem from "./ProjectItem";
import ProjectPreview from "./ProjectPreview";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function Projects() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [modal, setModal] = useState<ProjectModal>({ active: false, index: 0 });

  return (
    <div className="mx-auto mb-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <ProjectItem
            index={index}
            title={project.title}
            url={project.url}
            role={project.role}
            setModal={setModal}
          />
        </motion.div>
      ))}
      {breakpoint === "desktop" && (
        <ProjectPreview modal={modal} projects={projects} />
      )}
    </div>
  );
}

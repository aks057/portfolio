import { projectsData } from "@/utils/data/projects-data";
import { personalData } from "@/utils/data/personal-data";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../../motion/reveal";
import SectionHeader from "../section-header";
import ProjectCard from "./project-card";

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <SectionHeader index="03" label="Projects" title="Things I've built outside work." />

      <div className="grid gap-6 lg:grid-cols-2">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <Reveal self className="mt-10 flex justify-center">
        <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          More on GitHub <FiArrowUpRight />
        </a>
      </Reveal>
    </section>
  );
}

export default Projects;

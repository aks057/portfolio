import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <section id='projects' className="py-12 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-medium mb-3 text-slate-400 italic">
            My <span className="text-slate-500">Projects</span> <span className="text-xs">(they actually work!)</span>
          </h2>
        </div>

        {/* Enhanced Projects Display */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {projectsData.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className="glass-card p-0 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 group"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

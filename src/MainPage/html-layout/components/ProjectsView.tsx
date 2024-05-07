import { Projects } from "./PagesData";
import { ProjectCard } from "./ProjectCard";

export const ProjectsView = () => {
  return (
    <section
      id="projects"
      className="lg:contents xl:contents 2xl:contents flex flex-col items-center justify-center h-full top-[270vh] md:top-[280vh] lg:top-[220vh] left-0"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="flex flex-row justify-center flex-wrap h-full w-full mb-20">
        {Projects.map((project, index) => {
          return (
            <div  key={index} className="xl:w-1/2 mb-10 opacity-60 hover:opacity-100">
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

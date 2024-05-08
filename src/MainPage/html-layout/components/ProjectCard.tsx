import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Project } from "./PagesData";

export const ProjectCard = (project: Project) => {
  return (
    <Dialog>
      <DialogTrigger className="hover:drop-shadow-xl transition duration-300 m-2 bg-indigo-900 bg-opacity-30">
        <div className="h-full w-full flex flex-col justify-start">
          <div className="relative overflow-hidden rounded-lg border border-[#2A0E61] hover:border-purple-400 hover:rounded-lg hover:ring-1 hover:ring-purple-400 hover:ring-offset-1">
            <div className="relative">
              <img
                src={project.imageSrc}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full object-contain"
              />
              <div className="absolute inset-0 rounded-lg bg-white opacity-25 pointer-events-none mix-blend-multiply"></div>
            </div>
            <div className="relative p-4">
              <h1 className="text-2xl font-semibold text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-gray-300 text-start">{project.description}</p>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>
            <a
              className="flex justify-center items-center m-auto"
              target="_blank"
              href={project.href}
            >
              <Button variant="link">
                {project.title}
                <FaExternalLinkSquareAlt className="ml-1" />
              </Button>
            </a>
          </DialogTitle>
          <DialogDescription className="flex flex-col items-start justify-evenly gap-2">
            <div className="flex flex-row justify-between">
              <b className="mr-1 min-w-28">Team</b> <span>{project.team};</span>
            </div>
            <div className="flex flex-row justify-between">
              <b className="mr-1 min-w-28">Role</b> <span>{project.role};</span>
            </div>
            <div className="flex flex-row justify-between">
              <b className="mr-1 min-w-28">Duration</b> <span>{project.duration};</span>
            </div>
            <div className="flex flex-row justify-between">
              <b className="mr-1 min-w-28">Environment</b>{" "}
              <span>{project.environment};</span>
            </div>
            <div className="flex flex-row justify-between">
              <b className="mr-1 min-w-28">Responsibilities</b>
              <ul>
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility};</li>
                ))}
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

import { HoverCard, HoverCardContent } from "@/shared/ui/hover-card";
import { HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Button } from "@/shared/ui/button";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { SkillDataProvider } from "./SkillDataProvider";
import { Backend_skills, Database_skills, Devops_skills, Frontend_skill, Soft_skills, SourceControl_skills } from "./PagesData";

export const Skills = () => {
  const skillsArray = [
    Backend_skills,
    Frontend_skill,
    Database_skills,
    Devops_skills,
    SourceControl_skills,
    Soft_skills,
  ];

  let iconsScale: number = null;

  if(window.innerWidth <= 1024) {
    iconsScale = 0.6;
  } else {
    iconsScale = 1;
  }


  return (
    <>
      <section
        id="skills"
        className="flex flex-col items-center justify-center h-full w-full 2xl:top-[430vh] xl:top-[430vh] lg:top-[790vh] md:top-[770vh] sm:top-[675vh] top-[675vh] left-0"
      >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Skills
          </h1>
          {skillsArray.map((skills, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row justify-around flex-wrap h-full mt-4 gap-5 items-center z-[${
                  20 - index
                }]`}
              >
                {skills.map((image, j) => (
                  <HoverCard key={j}>
                    <HoverCardTrigger>
                      <SkillDataProvider
                        src={image.Image}
                        width={image.width * iconsScale}
                        height={image.height * iconsScale}
                        index={index}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="flex flex-col justify-center items-baseline w-50 bg-white">
                      <a
                        className="flex justify-center m-auto"
                        target="_blank"
                        href={image.src}
                      >
                        <Button variant="link">
                          {image.skill_name}
                          <FaExternalLinkSquareAlt className="ml-1" />
                        </Button>
                      </a>
                      <p className="text-md text-gray-600">
                        Over than <b>{image.yearsOfExpirience} years</b> of
                        experience
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            );
          })}
      </section>
    </>
  );
};

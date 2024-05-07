import { Scroll } from "@react-three/drei";
import { AboutMe, ProjectsView, Skills, Welcome } from "./components";

export const SpaceHtml = () => {
  return (
    <Scroll html style={{ height: "100vh", width: "100vw" }}>
      <div className="flex flex-col flex-wrap gap-10 2xl:container xl:container lg:container">
        <Welcome />
        <AboutMe />
        <ProjectsView />
        <Skills />
      </div>
    </Scroll>
  );
};

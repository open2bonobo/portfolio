import { AboutMe_Paragraphs } from "./PagesData";

export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="lg:contents xl:contents 2xl:contents flex flex-col items-center justify-center h-full top-[150vh] left-0"
      style={{ transform: "scale(0.9)" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        About Me
      </h1>
      <div className="relative rounded-lg shadow-lg">
        <div className="bg-indigo-900 bg-opacity-30 border-2 border-purple-400 rounded-lg ring-1 ring-purple-400 ring-offset-1 p-4">
          {AboutMe_Paragraphs.map((p, i) => (
            <p
              key={i}
              className="relative px-0 sm:p-5 mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-sm font-semibold text-white"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

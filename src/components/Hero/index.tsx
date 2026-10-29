import clsx from "clsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCss, SiGit, SiHtml5, SiNestjs, SiNodedotjs, SiReact, SiTypescript, SiVitest } from "react-icons/si";

const Hero = () => {
  return (
    <div
      className={clsx(
        "min-h-[calc(100vh-80px)] flex flex-col justify-center items-center",
      )}
    >
      <div className={clsx("flex justify-center items-center max-sm:pt-10")}>
        <div
          className={clsx(
            "max-w-180 p-4",
            "max-lg:flex max-lg:flex-col max-sm:items-center max-sm:text-center",
          )}
        >
          <h1 className={clsx("text-3xl")}>Olá,</h1>
          <h1 className={clsx("text-5xl")}>
            Eu me chamo{" "}
            <span
              className={clsx("font-medium border-b-3 border-over-secondary")}
            >
              João Victor!
            </span>
          </h1>
          <h1
            className={clsx(
              "bg-over-secondary w-fit text-primary p-1 font-medium mt-2 tracking-widest",
              "max-sm:mt-5",
            )}
          >
            DESENVOLVEDOR FULLSTACK
          </h1>
          <img
            src="hero.png"
            alt=""
            className={clsx(
              "max-w-125 w-full",
              "lg:hidden max-lg:self-center max-lg:mt-8",
            )}
          />
          <h1 className={clsx("mt-5 text-6xl", "max-sm:text-5xl")}>
            Transformando ideias em soluções através do código.
          </h1>
          <p className={clsx("mt-8")}>
            Desenvolvedor de software apaixonado por tecnologia, focado em criar
            aplicações eficientes, bem estruturadas e que resolvam problemas
            reais.
          </p>
          <div className={clsx("mt-5 flex gap-5")}>
            <a
              href="https://www.linkedin.com/in/joao-victor-04b0b931a/"
              target="_blank"
            >
              <FaLinkedin className={clsx("text-5xl")}></FaLinkedin>
            </a>
            <a href="https://github.com/VictorM-Dev" target="_blank">
              <FaGithub className={clsx("text-5xl")}></FaGithub>
            </a>
          </div>
        </div>
        <div>
          <img
            src="hero.png"
            alt=""
            className={clsx("max-w-110", "max-lg:hidden")}
          />
        </div>
      </div>
      <div className={clsx("w-full")}>
        <h1
          className={clsx(
            "text-secondary p-2 font-bold mt-2 tracking-widest text-center text-2xl",
            "max-sm:mt-5",
          )}
        >
          PRINCIPAIS TECNOLOGIAS
        </h1>
        <div className={clsx("text-7xl flex flex-wrap justify-center px-4 py-8 text-over-secondary gap-5")}>
          <SiTypescript className={clsx("hover:scale-105 transition-all")} title="TypeScript"></SiTypescript>
          <SiReact className={clsx("hover:scale-105 transition-all")} title="React"></SiReact>
          <SiNodedotjs className={clsx("hover:scale-105 transition-all")} title="Node.js"></SiNodedotjs>
          <SiNestjs className={clsx("hover:scale-105 transition-all")} title="Nest.js"></SiNestjs>
          <SiHtml5 className={clsx("hover:scale-105 transition-all")} title="HTML5"></SiHtml5>
          <SiCss className={clsx("hover:scale-105 transition-all")} title="CSS3"></SiCss>
          <SiGit className={clsx("hover:scale-105 transition-all")} title="Git"></SiGit>
          <SiVitest className={clsx("hover:scale-105 transition-all")} title="Vitest"></SiVitest>
        </div>
      </div>
    </div>
  );
};
export default Hero;

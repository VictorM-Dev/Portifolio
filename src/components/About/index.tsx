import clsx from "clsx";
import {
  LuBrain,
  LuBrainCircuit,
  LuCodeXml,
  LuGamepad2,
  LuTarget,
} from "react-icons/lu";

const About = () => {
  return (
    <div className={clsx("text-primary py-15 px-4")}>
      <h1
        className={clsx(
          "text-4xl border-b-2 border-over-secondary pb-2 font-medium tracking-widest mb-10",
        )}
      >
        Sobre
      </h1>
      <div className={clsx("flex gap-10 justify-center items-center flex-wrap")}>
        <div
          className={clsx(
            "max-w-135 text-[18px] text-justify flex flex-col gap-5",
          )}
        >
          <p>
            Sou estudante de Ciência da Computação na UEPB e desenvolvedor Full
            Stack, apaixonado por tecnologia e pela criação de soluções que unem
            funcionalidade, criatividade e boas práticas de desenvolvimento.
            Tenho experiência com desenvolvimento web e busco constantemente
            aprimorar minhas habilidades por meio de projetos práticos e novos
            desafios.
          </p>
          <p>
            Trabalho principalmente com JavaScript e TypeScript, utilizando
            tecnologias como React, Node.js e NestJS para desenvolver aplicações
            modernas e escaláveis. Também tenho familiaridade com bancos de
            dados, testes automatizados, Git e metodologias ágeis, sempre
            valorizando a organização do código, a manutenção e a qualidade das
            soluções desenvolvidas.
          </p>
          <p>
            Acredito que a evolução na tecnologia exige aprendizado contínuo,
            curiosidade e disposição para enfrentar problemas complexos. Meu
            objetivo é continuar expandindo meus conhecimentos, contribuir com
            projetos relevantes e evoluir como desenvolvedor, explorando novas
            tecnologias e transformando ideias em soluções reais.
          </p>
        </div>

        <div className={clsx("w-full max-w-135 flex flex-col gap-5")}>
          <div className={clsx("flex gap-5 items-center")}>
            <LuCodeXml
              className={clsx("bg-over-secondary p-1 text-5xl")}
            ></LuCodeXml>
            <div>
              <h1 className={clsx("text-3xl font-bold")}>O que me move</h1>
              <h1>Interesses além do código</h1>
            </div>
          </div>

          <div
            className={clsx(
              "text-over-primary flex justify-center items-center gap-5 flex-wrap",
            )}
          >
            <div
              className={clsx(
                "bg-primary max-w-60 p-3 min-h-50 flex flex-col justify-between",
                "hover:scale-105 transition-all",
              )}
            >
              <LuBrain
                className={clsx(
                  "bg-over-primary text-over-secondary p-1 text-4xl",
                )}
              ></LuBrain>
              <h1 className={clsx("font-bold text-2xl")}>
                Engenharia de software
              </h1>
              <p>Criar sistemas bem estruturados e sustentáveis.</p>
            </div>

            <div
              className={clsx(
                "bg-primary max-w-60 p-3 min-h-50 flex flex-col justify-between",
                "hover:scale-105 transition-all",
              )}
            >
              <LuGamepad2
                className={clsx(
                  "bg-over-primary text-over-secondary p-1 text-4xl",
                )}
              ></LuGamepad2>
              <h1 className={clsx("font-bold text-2xl")}>
                Aprender na prática
              </h1>
              <p>Experimentar ideias e entender o porquê das soluções.</p>
            </div>

            <div
              className={clsx(
                "bg-primary max-w-60 p-3 min-h-50 flex flex-col justify-between",
                "hover:scale-105 transition-all",
              )}
            >
              <LuTarget
                className={clsx(
                  "bg-over-primary text-over-secondary p-1 text-4xl",
                )}
              ></LuTarget>
              <h1 className={clsx("font-bold text-2xl")}>
                Desenvolvimento de jogos
              </h1>
              <p>Explorar a interção entre lógica e criatividade.</p>
            </div>

            <div
              className={clsx(
                "bg-primary max-w-60 p-3 min-h-50 flex flex-col justify-between",
                "hover:scale-105 transition-all",
              )}
            >
              <LuBrainCircuit
                className={clsx(
                  "bg-over-primary text-over-secondary p-1 text-4xl",
                )}
              ></LuBrainCircuit>
              <h1 className={clsx("font-bold text-2xl")}>Unificação com IA</h1>
              <p>
                Utilizar a IA como ferramenta para potencializar aplicações e
                automações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import clsx from "clsx";
import {
  LuBriefcaseBusiness,
  LuGraduationCap,
  LuTrendingUp,
} from "react-icons/lu";

const Experiences = () => {
  return (
    <div className="py-15 px-4 text-secondary flex flex-col gap-10">
      <h1
        className={clsx(
          "text-4xl border-b-2 border-over-secondary pb-2 font-medium tracking-widest mb-10 text-right",
        )}
      >
        Experiências
      </h1>

      <div>
        <div
          className={clsx(
            "flex items-center max-lg:flex-col max-lg:text-center max-lg:gap-10",
          )}
        >
          <h1 className={clsx("text-6xl font-medium flex-3")}>
            Aprendizado que vai da{" "}
            <span className={clsx("text-over-secondary")}>universidade</span> à
            prática.
          </h1>
          <p
            className={clsx(
              "flex-2 text-[18px] text-justify bg-over-secondary p-4 text-primary font-medium max-w-120",
            )}
          >
            Minha trajetória é construída entre a formação acadêmica, a
            experiência com desenvolvimento de software e a vontade de criar
            novas oportunidades de aprendizado dentro da universidade
          </p>
        </div>
      </div>

      <h1
        className={clsx(
          "text-2xl border-b-2 border-over-secondary pb-2 font-medium tracking-widest text-left max-w-100",
        )}
      >
        Profissional
      </h1>

      <div
        className={clsx("flex gap-10 flex-wrap justify-center items-center max-md:flex-col")}
      >
        <div className={clsx("flex flex-col gap-4 flex-1")}>
          <div className={clsx("flex items-center gap-4")}>
            <h1
              className={clsx(
                "p-4 text-3xl bg-over-secondary w-fit text-primary font-bold",
              )}
            >
              AI/R
            </h1>
            <div>
              <h1 className={clsx("font-medium text-2xl")}>
                Compass UOL - AI Revolution Company
              </h1>
              <h1>Estágio em Desenvolvimento de software Full Stack</h1>
            </div>
          </div>
          <p className="text-right border-b border-over-secondary py-2">
            Fev 2026 - 5 Ago 2026
          </p>
          <p className={clsx("text-justify")}>
            Meu estágio foi uma oportunidade de aproximar o conhecimento técnico
            da rotina de desenvolvimento em equipe. Participei de atividades
            práticas envolvendo aplicações web, integração com bancos de dados,
            versionamento e testes, acompanhando etapas reais do processo de
            desenvolvimento.
          </p>
          <p className={clsx("text-justify")}>
            Ao longo da experiência, trabalhei com tecnologias do ecossistema
            JavaScript e TypeScript e tive contato com organização de tarefas,
            metodologias ágeis, padrões de projeto e boas práticas de engenharia
            de software. Mais do que aprender ferramentas, desenvolvi autonomia,
            comunicação e cuidado com a qualidade do código.
          </p>
        </div>

        <div className={clsx("flex-1")}>
          <div className={clsx("flex gap-5 items-center")}>
            <LuBriefcaseBusiness
              className={clsx("bg-over-secondary p-1 text-5xl text-primary")}
            ></LuBriefcaseBusiness>
            <div>
              <h1 className={clsx("text-3xl font-bold")}>
                O que levo do estágio
              </h1>
              <h1>Aprendizados para além das tecnologias</h1>
            </div>
          </div>
          <div className={clsx("py-5 flex flex-col gap-2")}>
            <div className={clsx("flex items-center gap-2 font-medium")}>
              <LuTrendingUp className={clsx("text-2xl")}></LuTrendingUp>
              <h1>Colaboração e comunicação em equipe</h1>
            </div>
            <p>
              Aprendi a importância de compartilhar ideias, alinhar expectativas
              e trabalhar em conjunto para alcançar objetivos comuns.
            </p>
            <div className={clsx("flex items-center gap-2 font-medium")}>
              <LuTrendingUp className={clsx("text-2xl")}></LuTrendingUp>
              <h1>Código legível, testes e manuntenibilidade</h1>
            </div>
            <p>
              Desenvolvi uma visão mais cuidadosa sobre a qualidade do código,
              entendendo como testes e organização facilitam a manutenção e a
              evolução das aplicações.
            </p>
            <div className={clsx("flex items-center gap-2 font-medium")}>
              <LuTrendingUp className={clsx("text-2xl")}></LuTrendingUp>
              <h1>Organização do trabalho com práticas ágeis</h1>
            </div>
            <p>
              Ganhei experiência com metodologias ágeis, organização de tarefas
              e acompanhamento do progresso para manter as entregas alinhadas
              aos objetivos da equipe.
            </p>
          </div>
        </div>
      </div>

      <h1
        className={clsx(
          "text-2xl border-b-2 border-over-secondary pb-2 font-medium tracking-widest text-left max-w-100",
        )}
      >
        Acadêmica
      </h1>

      <div
        className={clsx("flex gap-10 flex-wrap justify-center items-center max-md:flex-col")}
      >
        <div className={clsx("flex flex-col gap-4 flex-1")}>
          <div className={clsx("flex items-center gap-4")}>
            <h1
              className={clsx(
                "p-4 text-3xl bg-over-secondary w-fit text-primary font-bold",
              )}
            >
              UEPB
            </h1>
            <div>
              <h1 className={clsx("font-medium text-2xl")}>
                Universidade Estadual da Paraíba
              </h1>
              <h1>Bacharelado em Ciência da Computação</h1>
            </div>
          </div>
          <p className="text-right border-b border-over-secondary py-2">
            2025 - Em andamento
          </p>
          <p className={clsx("text-justify")}>
            Cada período da graduação tem ampliado minha forma de pensar sobre
            computação: desde os fundamentos de programação e lógica até a
            compreensão de como planejar e estruturar soluções. A universidade
            também tem sido um espaço para trocar conhecimento, colaborar com
            outras pessoas e descobrir áreas que quero explorar mais a fundo.
          </p>
          <p className={clsx("text-justify")}>
            Quero aproveitar a formação não apenas para desenvolver minhas
            habilidades técnicas, mas também para participar de iniciativas que
            aproximem a computação da comunidade acadêmica.
          </p>
        </div>

        <div className={clsx("flex flex-col gap-4 flex-1")}>
          <div className={clsx("flex items-center gap-4")}>
            <LuGraduationCap
              className={clsx(
                "p-1 text-6xl bg-over-secondary w-fit text-primary font-bold",
              )}
            ></LuGraduationCap>
            <div>
              <h1 className={clsx("font-medium text-2xl")}>
                Desenvolvimento de jogos na universidade
              </h1>
              <h1>Projeto de extenção</h1>
            </div>
          </div>
          <p className="text-right border-b border-over-secondary py-2">
            2026 - Em andamento
          </p>
          <p className={clsx("text-justify")}>
            Além da formação e da experiência profissional, quero contribuir
            para ampliar o contato dos estudantes da UEPB com o desenvolvimento
            de jogos. A proposta da iniciativa de extensão é criar um espaço
            para explorar essa área, compartilhar conhecimentos e aproximar os
            fundamentos da computação da criação de experiências interativas.
          </p>
          <p className={clsx("text-justify")}>
            <span
              className={clsx(
                "bg-over-secondary px-2 py-1 uppercase font-medium",
              )}
            >
              Objetivo
            </span>{" "}
            Incentivar o aprendizado colaborativo e abrir espaço para que mais
            estudantes conheçam os conceitos, ferramentas e possibilidades da
            criação de jogos.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experiences;

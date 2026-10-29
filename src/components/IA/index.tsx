import clsx from "clsx";
import {
  LuBrainCircuit,
  LuCode,
  LuFilePen,
  LuSearchCode,
  LuSparkles,
} from "react-icons/lu";
import CardIA from "../CardIA";

const IA = () => {
  return (
    <div className={clsx("text-primary py-10 px-4")}>
      <h1
        className={clsx(
          "text-4xl border-b-2 border-over-secondary pb-2 font-medium tracking-widest mb-10",
        )}
      >
        Inteligência Artificial
      </h1>
      <div>
        <h1 className={clsx("text-6xl font-medium")}>
          Desenvolvendo com o{" "}
          <span className={clsx("text-over-secondary")}>apoio</span> da IA
        </h1>
        <p className={clsx("max-w-150 text-justify mt-5 text-[18px]")}>
          Utilizo ferramentas de inteligência artificial para otimizar o ciclo
          de desenvolvimento de software, desde a análise de requisitos e
          exploração de soluções até a implementação, depuração e revisão de
          código.
        </p>

        <div
          className={clsx(
            "mt-10 flex justify-center gap-5 items-center flex-wrap",
          )}
        >
          <div
            className={clsx(
              "flex gap-4 flex-col flex-1 min-w-100",
              "bg-primary p-4 text-over-primary",
            )}
          >
            <LuBrainCircuit
              className={clsx("text-6xl bg-over-secondary p-1")}
            ></LuBrainCircuit>
            <h1 className={clsx("text-2xl font-medium")}>
              IA como ferramenta de engenharia de software
            </h1>
            <p>
              Utilizo a inteligência artificial como apoio à análise e à tomada
              de decisões técnicas, avaliando criticamente as sugestões geradas
              e validando sua adequação aos requisitos, à segurança e à
              qualidade do software.
            </p>
            <div className={clsx("flex items-center gap-4 flex-wrap")}>
              <p className={clsx("bg-over-secondary w-fit p-2 font-medium")}>
                Resolução de problemas
              </p>
              <p className={clsx("bg-over-secondary w-fit p-2 font-medium")}>
                Pensamento crítico
              </p>
              <p className={clsx("bg-over-secondary w-fit p-2 font-medium")}>
                Aprendizado contínuo
              </p>
            </div>
          </div>

          <div className={clsx("flex-2 flex gap-4 flex-col")}>
            <div className={clsx("flex gap-4 flex-wrap")}>
              <CardIA
                icon={<LuCode></LuCode>}
                title="Desenvolvimento assistido"
                description="Utilização de IA para apoiar a implementação de funcionalidades, gerar estruturas iniciais de código e explorar diferentes abordagens técnicas, respeitando a arquitetura e os padrões do projeto."
                numero="01"
              ></CardIA>
              <CardIA
                icon={<LuSearchCode></LuSearchCode>}
                title="Depuração e análise de código"
                description="Análise de mensagens de erro, rastreamento de possíveis causas de falhas e investigação de comportamentos inesperados, utilizando a IA para acelerar o diagnóstico e avaliar possíveis correções."
                numero="02"
              ></CardIA>
            </div>

            <div className={clsx("flex gap-4 flex-wrap")}>
              <CardIA
                icon={<LuSparkles></LuSparkles>}
                title="Testes e documentação"
                description="Apoio na elaboração de cenários de teste, identificação de casos-limite e produção de documentação técnica, com validação dos resultados e adequação às regras de negócio."
                numero="03"
              ></CardIA>
              <CardIA
                icon={<LuFilePen></LuFilePen>}
                title="Refatoração e qualidade"
                description="Apoio na identificação de duplicações, oportunidades de simplificação e melhorias de legibilidade e manutenibilidade, considerando princípios de clean code e boas práticas de desenvolvimento."
                numero="04"
              ></CardIA>
            </div>
          </div>
        </div>
      </div>

      <h1 className={clsx("p-4 w-fit mx-auto mt-5 font-medium")}>
        A IA auxilia o processo. O entendimento, a análise e a validação
        continuam sendo parte do meu trabalho.
      </h1>
    </div>
  );
};

export default IA;

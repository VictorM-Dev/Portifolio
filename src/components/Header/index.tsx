import clsx from "clsx";
import { useState } from "react";
import { FiDownload, FiMenu } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

const buttonFormat =
  "text-over-primary cursor-pointer hover:border-b hover:border-over-primary transition-all text-[18px] font-medium";

const Header = () => {
  // const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className={clsx("h-20")}></div>
      <div
        className={clsx("fixed top-0 w-full flex justify-center bg-primary")}
      >
        <div
          className={clsx(
            "h-20",
            "flex items-center justify-between p-4 w-full max-w-7xl",
          )}
        >
          <h1
            className={clsx(
              "text-over-primary text-3xl font-bold tracking-widest",
              "bg-over-secondary p-2 shadow-1xl",
            )}
          >
            <a href="#home">JV</a>
          </h1>

          <div
            className={clsx(
              "flex gap-5 items-center py-5",
              "max-sm:bg-primary max-sm:absolute max-sm:top-20 max-sm:right-0 max-sm:h-[calc(100vh-80px)] max-sm:w-full max-sm:max-w-80",
              "max-sm:flex-col max-sm:justify-center",
              {
                "max-sm:flex": visible,
                "max-sm:hidden": !visible,
              },
            )}
          >
            <a href="#ia" className={buttonFormat}>
              IA
            </a>
            {/* <button onClick={() => navigate("/projects")} className={buttonFormat}>
          Projetos
        </button> */}
            <a href="#experiences" className={buttonFormat}>
              Experiências
            </a>
            <a href="#about" className={buttonFormat}>
              Sobre
            </a>
            <a
              href="https://github.com/VictorM-Dev/Portifolio/raw/refs/heads/main/docs/Curr%C3%ADculo.pdf"
              download="Curriculo.pdf"
              className={clsx(
                "text-over-secondary bg-secondary px-5 py-2 uppercase font-medium tracking-widest shadow-1xl",
                "cursor-pointer hover:bg-over-secondary hover:text-secondary transition-all",
                "flex gap-2 items-center",
              )}
            >
              Currículo
              <FiDownload></FiDownload>
            </a>
          </div>

          <FiMenu
            className={clsx("text-5xl cursor-pointer sm:hidden")}
            onClick={() => setVisible(!visible)}
          ></FiMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;

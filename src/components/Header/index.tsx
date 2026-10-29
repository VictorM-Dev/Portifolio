import clsx from "clsx";
// import { useNavigate } from "react-router-dom";

const buttonFormat =
  "text-over-primary cursor-pointer hover:border-b hover:border-over-primary transition-all text-[18px] font-medium";

const Header = () => {
  // const navigate = useNavigate();
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
          <div className={clsx("flex gap-5 items-center py-5")}>
            <a href="#about" className={buttonFormat}>
              Sobre
            </a>
            {/* <button onClick={() => navigate("/projects")} className={buttonFormat}>
          Projetos
        </button> */}
            <a href="#experiences" className={buttonFormat}>
              Experiências
            </a>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}curriculo.pdf`}
            download
            className={clsx(
              "text-over-secondary bg-secondary px-5 py-2 uppercase font-medium tracking-widest shadow-1xl",
              "cursor-pointer hover:bg-over-secondary hover:text-secondary transition-all",
            )}
          >
            Resumo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

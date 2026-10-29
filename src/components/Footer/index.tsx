import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={clsx("bg-secondary text-primary p-4 text-center")}>
      <h1>© 2026 João Victor. Todos os direitos reservados.</h1>
      <h1 className={clsx("text-[10px]")}>Em memória de Zacarias Medeiros, amado pai.</h1>
    </footer>
  );
};

export default Footer;

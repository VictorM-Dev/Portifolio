import clsx from "clsx";

type CardIAProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  numero: string;
};

const CardIA = ({ icon, title, description, numero }: CardIAProps) => {
  return (
    <div className={clsx("flex flex-col flex-1 gap-4 min-w-90")}>
      <div className={clsx("flex justify-between items-center")}>
        <div className={clsx("text-4xl bg-over-secondary p-1 w-fit")}>
          {icon}
        </div>
        <h1 className={clsx("bg-primary p-1 px-2 text-over-primary text-2xl font-bold")}>{numero}</h1>
      </div>

      <h1 className={clsx("text-2xl font-medium")}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default CardIA;

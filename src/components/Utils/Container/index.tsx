import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div className={clsx("w-screen max-w-7xl")}>{children}</div>
    </div>
  );
};

export default Container;

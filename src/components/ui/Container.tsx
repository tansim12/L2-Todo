import { ReactNode } from "react";

interface IChildProps {
  children: ReactNode;
}

const Container = ({ children }: IChildProps) => {
  return (
    <div className=" h-screen w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default Container;

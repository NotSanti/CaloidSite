import Nav from "../Nav";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Nav />
      <main className=" h-full">{children}</main>
    </>
  );
};

export default Layout;

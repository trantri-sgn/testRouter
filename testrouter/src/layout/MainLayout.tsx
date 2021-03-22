import React from "react";

type Props = {
  children: JSX.Element;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  );
}

import Link from "next/link";
import React from "react";
import style from "./page.module.css";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "ButtonFace",
        width: "100%",
        padding: "20px 10px",
        display:"flex",
        justifyContent:"space-around"
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/search">Search</Link>
    </div>
  );
};

export default Header;

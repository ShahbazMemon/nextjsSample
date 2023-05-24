import Link from "next/link";
import React from "react";
import styles from "../../styles/Sidebar.module.css";
// import { useRouter } from "next/router";
import { useRouteData } from 'next/dist/client/router';

export type SidebarProps = {};

type Props = {
  sidebar: SidebarProps;
};

const Sidebar = ({ sidebar }: Props) => {
  const router = useRouter();
  const links = [
    { label: " Home", path: "/", isActive: false },
    { label: " TODO", path: "/todos", isActive: false },
    { label: " POST", path: "/posts", isActive: false },
    { label: " PRODUCT", path: "/products", isActive: false },
  ];

  return (
    <div className={`${styles.sidebar}`}>
      {links.map((link, i) => {
        return (
          <Link className={router.pathname === `${link.path}` ? 'active' : ''} key={i} rel="stylesheet" href={`${link.path}`}>
            <h2>{link.label}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;

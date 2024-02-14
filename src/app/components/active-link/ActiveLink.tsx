"use client";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.link} ${pathName === path && styles["active-link"]}`}
      href={path}
      key={path}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;

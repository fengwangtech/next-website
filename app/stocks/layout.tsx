import Image from "next/image";
import styles from "./page.module.css";
import { Children } from "react";

export default function D3Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       {  children }
    </div>
  );
}

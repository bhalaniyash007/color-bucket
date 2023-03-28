import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ColorPalete from "./components/ColorPalete/ColorPalete";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Welcome to Color Bucket App</h1>
      <ColorPalete />
    </>
  );
}

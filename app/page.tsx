import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ColorPalete from "./components/ColorPalete/ColorPalete";
import { ThemeProvider } from "@mui/material";
import { THEME } from "@theme/theme";
import NavBar from "@components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="navbar" style={{ paddingBottom: "70px" }}>
        <NavBar />
      </div>
      <h1>Color Bucket App</h1>
      <ColorPalete />
    </>
  );
}

import ColorPalete from "@components/ColorPalete/ColorPalete";
import NavBar from "@components/Navbar/Navbar";
import ThemeProvider from "@components/ThemeProvider/ThemeProvider";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <div className="navbar" style={{ paddingBottom: "70px" }}>
          <NavBar />
        </div>
        <h1>Color Bucket App</h1>
        <ColorPalete />
      </ThemeProvider>
    </>
  );
}

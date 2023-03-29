import ColorPalete from "@components/ColorPalete/ColorPalete";
import NavBar from "@components/Navbar/Navbar";
import ThemeProvider from "@components/ThemeProvider/ThemeProvider";
import Typography from "@components/Typography/Typography";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <div className="navbar" style={{ paddingBottom: "70px" }}>
          <NavBar />
        </div>
        <Typography tag="h1" text="Color Bucket App" color={"Highlight"} />
        <Typography tag="h5" text="Design your bucket of happiness" />
        <ColorPalete />
      </ThemeProvider>
    </>
  );
}

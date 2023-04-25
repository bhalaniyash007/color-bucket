'use client';
import ColorPalete from '@components/ColorPalete/ColorPalete';
import PermanentDrawerLeft from '@components/AppSideBar/AppSideBar';
import NavBar from '@components/Navbar/Navbar';
import ThemeProvider from '@components/ThemeProvider/ThemeProvider';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@components/Typography';
import { MOCKDATA } from '@constants';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <NavBar />
      <PermanentDrawerLeft />
      <Box component="main" sx={{ flexGrow: 1, pl: 3 }}>
        <Toolbar />
        <Typography tag="h5" text="Design your bucket of happiness" />
        <ColorPalete
          colorPallete={{
            colorBucket: [
              { color: '#000000' },
              { color: '#000000' },
              { color: '#000000' },
              { color: '#000000' },
            ],
          }}
        />

        
      </Box>
    </Box>
  );
};

// export default function Home() {
//   return (
//     <>
//       <ThemeProvider>
//         <header>
//           <div className="navbar" style={{ paddingBottom: "70px" }}>
//             <NavBar />
//           </div>
//         </header>

//         <section>
//           <div className="container" style={{ display: "flex" }}>
//             <div className="app-drawer">
//               <PermanentDrawerLeft />
//             </div>
//             <div className="app-body">
//               <Typography
//                 tag="h1"
//                 text="Color Bucket App"
//                 color={"Highlight"}
//               />
//               <Typography tag="h5" text="Design your bucket of happiness" />
//               <ColorPalete />
//             </div>
//           </div>
//         </section>
//       </ThemeProvider>
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </>
  );
}

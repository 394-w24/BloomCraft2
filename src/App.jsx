import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BouquetBuilder from "./components/BouquetBuilder";
import Quiz from "./components/Quiz";

const App = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main: "#FFDB58", // Mustard color
          },
        },
      });

  return (
    <div>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BouquetBuilder />} />
                    <Route path="/quiz" element={ <Quiz/> } />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </div>
  );
};

export default App;
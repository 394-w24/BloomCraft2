import { useState, useEffect, createContext } from "react";
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

    const [userPreferences, setUserPreferences] = useState({});
    
    return (
        <div>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<BouquetBuilder userPreferences={userPreferences} />} />
                        <Route path="/quiz" element={<Quiz setUserPreferences={setUserPreferences}/>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
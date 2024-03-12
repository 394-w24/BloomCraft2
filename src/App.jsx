import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BouquetBuilder from "./components/BouquetBuilder";
import Quiz from "./components/Quiz";
import Login from "./components/Login";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFDB58", // Mustard color
      },
    },
  });

  const [userPreferences, setUserPreferences] = useState({
    shoppingFor: "all",
    occasion: "all",
  });
  const [templatePreferences, setTemplatePreferences] = useState(null);
  const [preferredBouquetsize, setPreferredbouquetsize] = useState("Small");

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/bouquetbuilder"
              element={
                <BouquetBuilder
                  userPreferences={userPreferences}
                  templatePreferences={templatePreferences}
                  preferredBouquetsize={preferredBouquetsize}
                />
              }
            />
            <Route
              path="/quiz"
              element={
                <Quiz
                  setUserPreferences={setUserPreferences}
                  setTemplatePreferences={setTemplatePreferences}
                  setPreferredbouquetsize={setPreferredbouquetsize}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;

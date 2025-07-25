import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

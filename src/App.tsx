import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { ThemeProvider } from "./contexts/ThemeContext";
import ShadcnHome from "./pages/ShadcnHome";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
          <Route index element={<Home />} />
          <Route path="shadcn" element={<ShadcnHome />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;

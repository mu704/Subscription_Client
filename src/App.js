import "./App.css";
import SuccessPage from "./SuccessPage";
import CancelPage from "./CancelPage";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
    </Routes>
  );
}

export default App;

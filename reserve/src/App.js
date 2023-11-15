import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="second" element={<p>second</p>} />
      <Route path="*" element={<p>third</p>} />
    </Routes>
  );
}

export default App;

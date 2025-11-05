import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PetCare from "./pages/PetCare/PetCare";
import PetDiary from "./pages/PetDiary/PetDiary";
import "./App.css";
import GeminiTest from "./GeminiTest";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/petcare" element={<PetCare />} />
            <Route path="/petdiary" element={<PetDiary />} />
          </Routes>

          {/* Teste Gemini dentro do conteúdo principal */}
          <GeminiTest />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

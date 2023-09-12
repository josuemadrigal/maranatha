import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbarr } from "./components/Navbarr";
import Home from "./pages/Home";
import { Conocenos } from "./pages/Conocenos";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <div className="fixed top-0 w-full z-10">
          <Navbarr />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conocenos" element={<Conocenos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

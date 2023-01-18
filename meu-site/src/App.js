import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './components/pages/Home';
import Sobremim from './components/pages/Sobremim';
import Habilidades from './components/pages/Habilidades';
import Portifolio from './components/pages/Portifolio';

import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact="true" element={<Home/>}/>
          <Route path="/sobremim" element={<Sobremim/>}/>
          <Route path="/habilidades" element={<Habilidades/>}/>
          <Route path="/portifolio" element={<Portifolio/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;

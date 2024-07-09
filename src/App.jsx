import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import About from "./pages/About";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import PopUp from "./components/PopUp";
import { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import SearchPage from "./pages/SearchPage";
function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const handLoginToggle = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  return (
    <>
      <Header handleLoginOpen={handLoginToggle} />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <PopUp isOpen={isLoginOpen} onClose={handLoginToggle} />
                <Hero />
                {/* <Cards /> */}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <h1>
                Error 4040 go black <a href="/">Home</a>
              </h1>
            }
          />
        </Route>
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;

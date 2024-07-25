import "./App.css";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Home from "./pages/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import * as React from "react";
import Button from "@mui/material/Button";
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
                {/* <Button variant="contained">Hello world</Button> */}
                {/* <PopUp isOpen={isLoginOpen} onClose={handLoginToggle} /> */}
                <Home />
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
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;

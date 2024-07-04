import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import About from "./pages/About";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <Hero />
                <Cards />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route
            path="*"
            element={
              <h1>
                Error 4040 go black <a href="/">Home</a>
              </h1>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

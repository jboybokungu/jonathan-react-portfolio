import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;

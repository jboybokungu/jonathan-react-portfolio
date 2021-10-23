import React from "react";
import { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

import './app.css';

function App() {
  const [page, setPage] = useState('About');

  function renderPage() {
    if (page === 'About'){
      return <About/>;
    } else if (page === 'Portfolio'){
      return <Portfolio/>;
    } else if (page === 'Resume'){
      return <Resume/>;
    } else if (page === 'Contact'){
      return <Contact/>;
    }
  }
  
  return (
    <div>
      <Navbar page={page} setPage={setPage}/>

      <Header/>
      {renderPage()}

      <Footer/>
    </div>
  )

  //   <div>
  //     <Navbar />
  //     <Header />
  //     <About />
  //     <Portfolio />
  //     <Resume />
  //   </div>
  // );
}

export default App;

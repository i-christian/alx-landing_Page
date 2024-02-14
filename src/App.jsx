import React from 'react';
import Header from "./components/Header.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

const App = () => {

  const content = (
    <main className="body">
      <Header/>
      <Features/>
      <Footer/>
    </main>
  );

  return content;
}

export default App;

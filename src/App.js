import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/MainContent";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

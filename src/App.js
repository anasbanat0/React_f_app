import { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Index from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
        <Outlet></Outlet>
        <div className="fixed-footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;

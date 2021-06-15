import React from "react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import _Carousel from "./components/_Carousel";
import Logo from "./components/Logo";
import _Sidebar from "./components/_Sidebar";

function App() {
  return (
    <div className="site-container">
      <Logo />
      <_Carousel />
      <_Sidebar />
    </div>
  );
}

export default App;

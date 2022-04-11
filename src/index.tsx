import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sultans from "./pages/Sultans";
import Contact from "./pages/Contact";

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="sultans" element={<Sultans />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);

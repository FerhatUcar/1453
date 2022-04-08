import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sultans from "./pages/Sultans";

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="sultans" element={<Sultans />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);

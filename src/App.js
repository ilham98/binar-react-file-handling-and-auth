import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthMiddleware from "./middlewares/AuthMiddleware";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthMiddleware>
              <Home />
            </AuthMiddleware>
          }
        />
        <Route
          path="/about"
          element={
            <AuthMiddleware>
              <About />
            </AuthMiddleware>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

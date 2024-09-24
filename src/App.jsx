import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Error404 from "./pages/errorPage/Error404";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

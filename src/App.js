import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Navbar from "./components/Navbar";

import Projects from "./components/Projects/Projects";

import { ChakraProvider } from "@chakra-ui/react";

import Education from "./components/Education/Education";

import Contact from "./Contact/Contact";

const App = () => {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/projects" element={<Projects />} exact />
          <Route path="/education" element={<Education />} exact />
        </Routes>
      </ChakraProvider>
    </div>
  );
};

export default App;

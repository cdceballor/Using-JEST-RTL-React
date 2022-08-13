import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCharacters from "../components/ListCharacters";
import TemplateChar from "../components/TemplateChar";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListCharacters />} />
        <Route path="/char/:id" element={<TemplateChar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

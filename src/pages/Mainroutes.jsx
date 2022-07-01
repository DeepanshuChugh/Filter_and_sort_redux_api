import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "../components/Books";
import SingleBook from "../components/SingleBook";
import EditBook from "../components/EditBook";
import Admin from "../components/Admin";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route path="/books/:id/:edit" element={<EditBook />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
};

export default Mainroutes;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./Components/AddBook";
import ListBook from "./Components/ListBook";
import UpdateBook from "./Components/UpdateBook";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ListBook />} />
           <Route path="/add-book" element={<AddBook />} />
           <Route path="/update-book/:id" element={ <UpdateBook /> } />           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

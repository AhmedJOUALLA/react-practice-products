import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import data from "./produits/ProduitsData";
import ProductDetails from "./produits/ProductDetails";
import ProductListe from "./produits/ProductListe" ;
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListe data={data} />} />
            <Route path="/details/:id" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
     
    </>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Details from "../pages/Details";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const [countries, setCountries] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

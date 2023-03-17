import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  HOME_URL,
  ABOUTUS_URL,
  ADDMONEY_URL,
  CHECKDETAILS_URL,
  TRANSFER_URL,
} from "../constants/rout_urls";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import AddMoney from "../pages/AddMoney";
import CheckDetails from "../pages/CheckDetails";
import TransferMoney from "../pages/TransferMoney";

const Bank = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={ABOUTUS_URL} element={<AboutUs />} />
        <Route path={ADDMONEY_URL} element={<AddMoney />} />
        <Route path={CHECKDETAILS_URL} element={<CheckDetails />} />
        <Route path={TRANSFER_URL} element={<TransferMoney />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Bank;

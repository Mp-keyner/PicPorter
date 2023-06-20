import React, { children } from "react";
import { ToastContainer } from "react-toastify";
import Navart from "./Navart";
import Footer from "./Footer";

export const Layouy = ({ children }) => {
  return (
    <>
      <Navart />
      <div className=" p-1   lx:h-100 ">
        <div className="">
          <div className="p-5  rounded">{children}</div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

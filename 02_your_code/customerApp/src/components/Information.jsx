import React, { useState } from "react";
import getCustumers from "../hooks/useGetCustomers";
import parse from "html-react-parser";

const Information = () => {
  const data = getCustumers();
  const htmlString = data.banner_message || "Loanding";
  return (
    <div>
      <div className="parseinfo">
        <h1> {parse(htmlString)} </h1>
      </div>
    </div>
  );
};

export default Information;

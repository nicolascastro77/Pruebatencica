import React from "react";
import getCustumers from "../hooks/useGetCustomers";

const TimeZone = () => {
  const data = getCustumers();

  return (
    <div>
      <h3 className="modi">{data.displayed_timezone}</h3>
    </div>
  );
};

export default TimeZone;

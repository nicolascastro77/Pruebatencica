import React from "react";
import "../styles/UserEmail.css";
import getCustumers from "../hooks/useGetCustomers";

const UserEmail = () => {
  const data = getCustumers();
  return (
    <div>
      <div className="register">
        <div className="field">
          <input id="register" maxLength={21} type="text" />
          <label htmlFor="register">
            <span>{data.user_email}</span>
          </label>
          <button>Actualizar</button>
        </div>
      </div>
    </div>
  );
};

export default UserEmail;

import React from "react";
import "../styles/NameTahme.css";
import getCustumers from "../hooks/useGetCustomers";
const NameTheme = () => {
  const data = getCustumers();
  return (
    <div>
      <div>
        <div className="dropdown">
          <label className="dropdown--label">
            <input type="checkbox" className="dropdown--checkbox" />
            <span className="dropdown--text">
              {data.theme_name}
              <span className="dropdown--arrow" />
            </span>
            <div className="dropdown--list">
              <ul>
                <li>
                  <a href>Simply Fabulous</a>
                </li>
                <li>
                  <a href>Tropical Island</a>
                </li>
                <li>
                  <a href>Safari</a>
                </li>
                <li>
                  <a href>Tranquility"</a>
                </li>
                <li>
                  <a href>Mustache Bash</a>
                </li>
                <li>
                  <a href>Candy Crush</a>
                </li>
                <li>
                  <a href>Garden Party</a>
                </li>
              </ul>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NameTheme;

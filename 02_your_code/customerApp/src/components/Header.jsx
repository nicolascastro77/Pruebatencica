import React from "react";
import "../styles/Header.css";
import Language from "../containers/Language";

function Header() {
  return (
    <div>
      <section id="wrapper">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid mx-2">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#toggle-navbar"
                aria-controls="toggle-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="uil-bars text-white" />
              </button>
              <a className="navbar-brand" href="#">
                Edu<span className="main-color">Next</span>
              </a>
            </div>
            <Language />
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;

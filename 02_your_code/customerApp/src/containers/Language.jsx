import React from "react";

const Language = () => {
  return (
    <div class="nav-wrapper">
      <div class="sl-nav ">
        <div>Languague</div>
        <ul>
          <li>
            <b></b> <i class="  sl-flag flag-de" aria-hidden="true"></i>
            <div class="triangle"></div>
            <ul>
              <li>
                <i class="sl-flag flag-de">
                  <div id="germany"></div>
                </i>{" "}
                <span class="active">Deutsch</span>
              </li>
              <li>
                <i class="sl-flag flag-usa">
                  <div id="germany"></div>
                </i>{" "}
                <span>Englisch</span>
              </li>
              <li>
                <i class="sl-flag flag-de">
                  <div id="germany"></div>
                </i>{" "}
                <span class="active">Deutsch</span>
              </li>
              <li>
                <i class="sl-flag flag-usa">
                  <div id="germany"></div>
                </i>{" "}
                <span>Englisch</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Language;

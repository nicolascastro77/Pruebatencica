import React from "react";
import UserEmail from "../components/UserEmail";
import NameTheme from "../components/NameTheme";
import TimeZone from "../components/TimeZone";

const ModificableList = () => {
  return (
    <div>
      <section class=" mt-5 statistics">
        <div class="row">
          <div class="col-lg-5">
            <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
              <div class="ms-3">
                <div class="d-flex align-items-center">
                  <h3 class="mb-0 modi">Email:</h3>
                </div>
                <UserEmail />
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
              <div class="ms-3">
                <div class="d-flex align-items-center">
                  <h3 class="mb-0 modi">Theme Name</h3>
                </div>
                <NameTheme />
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
              <div class="ms-3">
                <div class="text-center d-flex align-items-center">
                  <h3 class="modi">Zona Horaria</h3>
                </div>
                <TimeZone />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModificableList;

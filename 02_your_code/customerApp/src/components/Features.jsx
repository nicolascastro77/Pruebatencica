import React from "react";
import "../styles/Feature.css";
import getCustumers from "../hooks/useGetCustomers";

const Features = () => {
  const data = getCustumers();
  return (
    <div className="mt-5 row section-welcome">
      <div className="col-lg-12">
        <div className="welcome">
          <div className="content rounded-3 p-3">
            <div class="custom-checkbox">
              <div>
                <h1>Features</h1>
                <div className="row section-welcome">
                  <div className="col-lg-6">
                    <ul className="checkbox-list">
                      <li>
                        <input type="checkbox" id="test1" />
                        <label htmlFor="test1">
                          CERTIFICATES_INSTRUCTOR_GENERATION
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" id="test2" defaultChecked />
                        <label htmlFor="test2">ENABLE_COURSEWARE_SEARCH</label>
                      </li>
                      <li>
                        <input type="checkbox" id="test3" />
                        <label htmlFor="test3">ENABLE_EDXNOTES</label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="checkbox-list">
                      <li>
                        <input type="checkbox" id="test4" />
                        <label htmlFor="test4">
                          INSTRUCTOR_BACKGROUND_TASKS
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" id="test5" defaultChecked />
                        <label htmlFor="test5">ENABLE_COURSE_DISCOVERY</label>
                      </li>
                      <li>
                        <input type="checkbox" id="test6" />
                        <label htmlFor="test6">ENABLE_DASHBOARD_SEARCH</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import Information from "../components/Information";
import ImgProfile from "../components/ImgProfile";
const BannerMessage = () => {
  return (
    <div>
      <div className="mt-5 Banner">
        <div className="row section-welcome">
          <div className="col-lg-10">
            <div className="welcome">
              <div className="content rounded-3 p-3">
                <Information />
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <ImgProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMessage;

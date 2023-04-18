import React from "react";
import Header from "../components/Header";
import ModificableList from "../containers/ModificableList";
import InformationList from "../containers/InformationList";
import BannerMessage from "../containers/BannerMessage";
import Features from "../components/Features";

const SettingsUser = () => {
  return (
    <div>
      <Header />
      <BannerMessage />
      <InformationList />
      <ModificableList />
      <Features />
    </div>
  );
};

export default SettingsUser;

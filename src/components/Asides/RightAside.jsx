import React from "react";
import SocialMedia from "../SocialMedia";
import FindUs from "./FindUs";
import QZone from "./QZone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialMedia></SocialMedia>
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightAside;

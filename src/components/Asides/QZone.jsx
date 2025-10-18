import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="text-xl font-bold mb-2">Q-Zone</h2>
      <div className="space-y-5">
        <img className="w-full" src={swimmingImg} alt="" />
        <img className="w-full" src={classImg} alt="" />
        <img className="w-full" src={playgroundImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;

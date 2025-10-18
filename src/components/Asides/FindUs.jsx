import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full bg-base-200 ">
          <button className="btn py-3 bg-base-100 join-item justify-start">
            <FaFacebook></FaFacebook>
            FaceBook
          </button>
          <button className="btn py-3 bg-base-100 join-item justify-start">
            <FaTwitter></FaTwitter>
            Twitter
          </button>
          <button className="btn py-3 bg-base-100 join-item justify-start">
            <FaInstagram></FaInstagram>
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

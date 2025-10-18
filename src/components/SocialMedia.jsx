import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialMedia = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Login With</h2>

      <div className="flex flex-col gap-3">
        {/* Google */}

        <button className="btn btn-outline text-[#0099f1] border-[#0099f1] hover:bg-[#7cc6f1] hover:text-white hover:border-0">
          <FcGoogle></FcGoogle> Login with Google
        </button>
        {/* GitHub */}
        <button className="btn  btn-outline ">
          <FaGithub></FaGithub>Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;

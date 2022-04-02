import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center m-3">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold font-poppins text-center">
          We are In-Seller🎉
        </p>
        <p className="text-lg font-normal font-poppins text-center">
          A platform where you can create your store online
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <img
          className="w-44 h-20"
          src="/assets/google-play-badge.png"
          alt="google play"
        />
        <img
          className="w-44 h-20"
          src="/assets/google-play-badge.png"
          alt="google play"
        />
      </div>
    </div>
  );
}

export default Footer;

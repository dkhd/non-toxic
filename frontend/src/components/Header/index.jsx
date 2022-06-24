import React from "react";

function Header() {
  return (
    <div className="flex flex-row w-full p-5  bg-white">
      <img src="./non-toxic.png" className="w-14" alt="logo" />
      <div className="grow" />
      <a
        to="https://note.hadna.space/detect-toxic-comments-in-your-app-using-toxicity-space"
        className="bg-bermuda-600 text-malibu-100 font-light my-auto p-3 hover:bg-bermuda-200 hover:text-bermuda-600 rounded-md"
      >
        About
      </a>
    </div>
  );
}

export default Header;

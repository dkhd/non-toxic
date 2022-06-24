import React from "react";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row w-full p-5 bg-gray-100 px-10 lg:px-56">
      <div className="flex flex-col">
        <a
          className="font-normal bg-white p-3 rounded-xl w-fit mx-auto"
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./non-toxic.png" alt="Linode" className="w-14" />
        </a>
      </div>
      <div className="flex flex-col w-full m-auto">
        <span className="text-center text-gray-600 my-5 lg:my-0">
          Built for participating in 2022 Linode x Hashnode Hackathon
        </span>
      </div>

      <div className="flex flex-col mx-auto">
        <span className="mb-3 text-gray-600 text-center lg:text-left">
          Supported by:
        </span>
        <div className="flex flex-row space-x-5">
          <a
            className="font-normal my-auto"
            href="https://linode.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./linode.png" alt="Linode" className="w-20" />
          </a>
          <a
            className="font-normal my-auto"
            href="https://hashnode.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./hashnode.png" alt="Linode" className="w-20" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

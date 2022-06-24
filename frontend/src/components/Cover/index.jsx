import React from "react";

function Cover() {
  return (
    <div className="flex flex-col w-full">
      <div className="m-auto p-7 lg:p-20 text-gray-900">
        <div className="p-5 lg:p-10 w-full lg:w-3/4 mx-auto">
          <h1 className="text-center text-2xl font-semibold">
            Toxic Commentary <br />
            <span className="italic font-light">täk-sik kä-mən-ter-ē</span>
          </h1>
          <p className="text-center mt-10 font-light">
            A toxic commentary is defined as a rude, dis-respectful, or
            unreasonable comment that is likely to make other users leave an
            internet discussion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cover;

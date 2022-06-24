import React, { useState } from "react";
import { Link } from "react-scroll";

const label = {
  label:
    "Type your toxic comment here. It could be a sentence or a paragraph. Rude and swearing words are welcome!",
  button: "Check Toxicity",
  placeholder: "Type here...",
};

function ToxicClassifier(props) {
  const [text, setText] = useState("");
  const [requesting, setRequesting] = useState(false);
  const [resultDone, setResultDone] = useState(false);

  const checkResult = (data) => {
    setRequesting(false);
    if (data.length > 0) {
      let foundToxic = false;
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].results.length; j++) {
          if (data[i].results[j].match === true) {
            if (!foundToxic) {
              props.setResult(data[i].label);
              foundToxic = true;
            }
          }
        }
      }
      if (!foundToxic) props.setResult("safe");
      setResultDone(true);
    }
  };

  const checkToxicity = () => {
    setResultDone(false);
    setRequesting(true);
    props.setResult("");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    };

    fetch(process.env.REACT_APP_API_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        checkResult(data);
      });
  };
  return (
    <div className="w-full lg:m-auto">
      <div className="flex flex-col w-full p-7">
        <div className="bg-white/[.5] w-full p-7 rounded-lg lg:w-3/4 mx-auto">
          <span className="text-gray-600 text-center">{label.label}</span>
          <textarea
            className="w-full h-64 mx-auto p-3 bg-white text-gray-600 rounded-lg resize-none outline-none disabled:bg-gray-100 disabled:text-gray-400 mt-5"
            placeholder={label.placeholder}
            onChange={(e) => {
              setText(e.target.value);
              props.setResult("");
              setResultDone(false);
            }}
            disabled={requesting}
          ></textarea>
          <div className="flex flex-row mt-10">
            <div className="flex flex-row mx-auto space-x-5">
              <button
                disabled={requesting}
                className="flex flex-row w-full lg:w-fit bg-white p-3 rounded-md text-bermuda-600 disabled:bg-gray-100 disabled:text-bermuda-400"
              >
                <span className="m-auto">Randomize</span>
              </button>
              <button
                className="flex flex-row w-full lg:w-fit bg-bermuda-600 p-3 rounded-md text-white disabled:bg-bermuda-300 disabled:text-bermuda-100"
                onClick={checkToxicity}
                disabled={requesting}
              >
                <div className="flex flex-row mx-auto">
                  {requesting ? (
                    <svg
                      className="animate-spin mr-3 h-5 w-5 text-white my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : null}{" "}
                  <span className="my-auto">{label.button}</span>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-5">
            {resultDone ? (
              <Link
                className="mx-auto cursor-pointer"
                activeClass="active"
                to="resultPage"
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="text-center text-bermuda-600 underline">
                  See result
                </p>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToxicClassifier;

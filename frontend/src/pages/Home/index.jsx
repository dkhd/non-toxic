import React, { useState } from "react";
import Cover from "../../components/Cover";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Result from "../../components/Result";
import ToxicClassifier from "../../components/ToxicClassifier";

function Home() {
  const [result, setResult] = useState("");
  return (
    <div className="flex flex-col bg-white w-screen">
      <div
        className="w-full mx-auto bg-cover bg-bottom"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, 0.5)), url("./cover.jpg")',
        }}
      >
        <Header />
        <div className="flex flex-col lg:flex-row min-h-screen">
          <Cover />
          <ToxicClassifier setResult={setResult} />
        </div>
      </div>
      {result.length > 0 ? <Result result={result} /> : null}
      <Footer />
    </div>
  );
}

export default Home;

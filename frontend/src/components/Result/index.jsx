import React, { useEffect, useState } from "react";

const category = {
  identity_attack: {
    image: "./categories/identity-attack.jpg",
    label: "Identity Attack",
    description:
      "Identity attack is a form of bullying when it targets people based on an aspect of their identity. This means the incident is based on bias about the target’s identity (e.g. appearance, race, culture, gender and gender identity, language, religion, socioeconomic status, disability, sexual orientation). Because identity-based bullying targets who you are—a core part of your identity—it can be especially harmful.",
  },
  insult: {
    image: "./categories/insult.jpg",
    label: "Insult",
    description:
      "Insult is a form of toxic commentary to treat or speak to with scorn, insolence, or great disrespect; subject to treatment, a remark, etc. that hurts or is meant to hurt the feelings or pride.",
  },
  obscene: {
    image: "./categories/obscene.jpg",
    label: "Obscene",
    description:
      "Obscene is a form of the portrayal or description of sexual matters that is offensive or disgusting by accepted standards of morality and decency.",
  },
  severeToxicity: {
    image: "./categories/severe-toxicity.jpg",
    label: "Severe Toxicity",
    description:
      "Severe toxicity is a form of commentary and defined as a rude, dis-respectful, or unreasonable comment that is likely to make other users leave an internet discussion.",
  },
  sexualExplicit: {
    image: "./categories/sexual-explicit.jpg",
    label: "Sexual Explicit",
    description:
      "Sexual explicit is a form of commentary that fully revealed or expressed without vagueness, implication, or ambiguity : leaving no question as to meaning or intent, and it contains the depiction of nudity or sexuality.",
  },
  threat: {
    image: "./categories/threat.jpg",
    label: "Threat",
    description:
      "Threat is a form of an expression of intention to inflict evil, injury, or damage on someone in retribution for something done or not done.",
  },
  toxicity: {
    image: "./categories/toxicity.jpg",
    label: "Toxicity",
    description:
      "Toxicity is a form of commentary and defined as a rude, dis-respectful, or unreasonable comment that is likely to make other users leave an internet discussion.",
  },
  safe: {
    image: "./categories/safe.jpg",
    label: "Safe Comment",
    description:
      "You're good! The classifier engine does not detect this comment as a toxic comment. You're good to go!",
  },
};

function Result(props) {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    switch (props.result) {
      case "identity_attack":
        setDetail(category.identity_attack);
        break;
      case "insult":
        setDetail(category.insult);
        break;
      case "obscene":
        setDetail(category.obscene);
        break;
      case "severe_toxicity":
        setDetail(category.severeToxicity);
        break;
      case "sexual_explicit":
        setDetail(category.sexualExplicit);
        break;
      case "threat":
        setDetail(category.threat);
        break;
      case "toxicity":
        setDetail(category.toxicity);
        break;
      case "safe":
        setDetail(category.safe);
        break;

      default:
        break;
    }
  }, [props]);
  return (
    <div className="flex flex-col items-center py-10" id="resultPage">
      {detail !== null ? (
        <div className="container w-full lg:w-1/2 mt-10">
          <figure className="relative w-full md:h-full">
            <img
              className="md:object-cover md:h-full w-full"
              src={detail.image}
              alt="Category"
            ></img>
            <figcaption className="absolute -mt-24 text-white px-2 md:px-10 py-10 md:py-4">
              <div className="bg-bermuda-600 py-3 px-5 md:px-10 rounded-full">
                <span>{detail.label}</span>
              </div>
            </figcaption>
          </figure>
          <div className="bg-bermuda-600 p-10">
            <span className="text-white">{detail.description}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Result;

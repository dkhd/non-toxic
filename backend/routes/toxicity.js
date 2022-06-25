let express = require("express");
let router = express.Router();

const toxicity = require("@tensorflow-models/toxicity");

const classifier = async (sentences) => {
  const threshold = 0.85;
  return await toxicity.load(threshold).then(async (model) => {
    return await model.classify(sentences).then(async (predictions) => {
      return predictions;
    });
  });
};

router.post("/", async function (req, res, next) {
  let result = await classifier(req.body.text);
  res.json(result);
});

router.get("/", function (req, res, next) {
  let result = {
    message:
      "Please don't send GET request to this endpoint, use POST only. Read more detailed information in the following URL.",
    url: "https://note.hadna.space/detect-toxic-comments-in-your-app-using-toxicity-space",
  };
  res.json(result);
});


module.exports = router;

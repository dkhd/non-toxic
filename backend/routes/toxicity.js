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
  res.render("index", {
    title:
      "Please use POST. Complete information can be found here https://note.hadna.space/detect-toxic-comments-in-your-app-using-toxicity-space",
  });
});


module.exports = router;

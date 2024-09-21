import society from "../../models/society.js";

export const newSocietyController = (req, res) => {
  const { societyName, banner, picture, moreImages, description } = req.body;
  society
    .create({
      societyName,
      banner,
      picture,
      moreImages,
      description,
      owner: req.user._id,
    })
    .then((result) => {
      if (!result) return res.status(401).send({ message: "Error" });
      res.status(200).send({ message: "Create success", result });
    })
    .catch((err) => {
      res.status(401).send({
        message: "Something went wrong",
        error: err.errorResponse.errmsg,
      });
    });
};

export const getSocietyByID = (req, res) => {
  const { societyID } = req.params;
  society
    .findOne({ _id: societyID })
    .then((result) => {
      if (!result) return res.status(401).send({ message: "Error" });
      res.status(200).send({ message: "fetched success", result });
    })
    .catch((err) => {
      res.status(401).send({
        message: "Something went wrong",
        error: err.errorResponse.errmsg,
      });
    });
};

export const getSocietiesByOwner = (req, res) => {
  const { _id } = req.user;
  society
    .find({ owner: _id })
    .then((result) => {
      console.log(result);
      if (!result) return res.status(401).send({ message: "Error" });
      res.status(200).send({ message: "fetch success", result });
    })
    .catch((err) => {
      res.status(401).send({
        message: "Something went wrong",
        error: err.errorResponse.errmsg,
      });
    });
};

export const deleteSocietyByID = (req, res) => {
  const { societyID } = req.params;
  society
    .deleteOne({ _id: societyID, owner: req.user._id })
    .then((result) => {
      if (!result) return res.status(401).send({ message: "Error" });
      if (result.deletedCount > 0)
        return res.status(200).send({ message: "Delete sucess", result });
      res.status(401).send({ message: "Couldnt delete" });
    })
    .catch((err) => {
      res.status(401).send({
        message: "Something went wrong",
        error: err.errorResponse?.errmsg || null,
      });
    });
};

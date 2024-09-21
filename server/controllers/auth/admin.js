import bcryptSalt from "../../bcrypt.js";
import bcrypt from "bcrypt";
import admin from "../../models/admin.js";
import jwt from "jsonwebtoken";

export const adminRegisterController = (req, res) => {
  if (req.body.isAdminExists) {
    res.status(401).send({
      message: "user already exists, please login!",
      admin: req.body.admin.data,
    });

    return;
  }
  let { userName, password, profilePicture, description, hashedPassword } =
    req.body;

  hashedPassword = bcrypt.hashSync(password, bcryptSalt);
  admin
    .create({
      userName,
      hashedPassword,
      profilePicture,
      description,
    })
    .then((result) => {
      console.log(result);
      if (!result) return res.status(401).send({ message: "Error" });
      res
        .status(200)
        .send({ message: "Create success , please get activated", result });
    })
    .catch((err) => {
      res.status(401).send({
        message: "Something went wrong",
        error: err.errorResponse.errmsg,
      });
    });
};

export const adminLoginController = (req, res) => {
  if (!req.body.isAdminExists)
    return res.status(401).send({ message: "Create an account first" });
  const { userName, password } = req.body;
  const { hashedPassword } = req.body.admin;
  const result = bcrypt.compareSync(password, hashedPassword);

  if (!result) {
    res.status(401).json({
      message: "Wrong password or please create a admin account",
    });
  } else {
    const token = jwt.sign(
      { user: req.body.admin },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "10d",
      }
    );
    res.status(200).json({
      token,
      user: req.body.admin,
    });
  }
};

export const adminProfileController = (req, res) => {
  res.status(200).json({
    user: req.user,
  });
};

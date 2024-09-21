import admin from "../models/admin.js";
import jwt from "jsonwebtoken";

// tells if the admin account with the same username exists or not

export function adminExistsOrNot(req, res, next) {
  const { userName } = req.body;

  // DB Work
  admin
    .findOne({ userName })
    .then((adminValue) => {
      if (adminValue) {
        // console.log("admin hai", adminValue);
        req.body.admin = adminValue;
        req.body.isAdminExists = true;
        next();
        return;
      }
      req.body.isAdminExists = false;
      next();
      return;
    })
    .catch((err) => {
      req.body.isAdminExists = false;
      next();
      return;
    });
}

export function checkAdminRole(req, res, next) {
  if (req.user.role != "admin") {
    return res.status(401).send({
      message: "You are not a admin, please create a admin account",
    });
  } else if (!req.user.activated) {
    return res.status(401).send({
      message: "Please get activated first",
    });
  }
  next();
}

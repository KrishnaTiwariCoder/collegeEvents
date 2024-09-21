// when asked for profile with the referenced jwt token it gives the client that

import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const authVerify = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user.user;

    next();
  } else {
    res.status(400).json({
      message: "Authorization required !",
    });
  }
};

export const isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    res.status(400).json({
      error: errors.array(),
    });
  } else {
    next();
  }
};

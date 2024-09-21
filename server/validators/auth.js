import { check, validationResult } from "express-validator";

export const adminRegister = [
  check("userName").notEmpty(),
  check("password").notEmpty(),
  check("profilePicture").notEmpty().isURL(),
  check("description").notEmpty(),
];

export const adminLogin = [
  check("userName").notEmpty(),
  check("password").notEmpty(),
];

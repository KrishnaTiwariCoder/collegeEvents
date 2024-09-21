import { check } from "express-validator";

export const createSocietyValidator = [
  check("societyName").notEmpty(),
  check("picture").notEmpty().isURL(),
  check("description").notEmpty(),
  check("banner").notEmpty().isURL(),
  check("moreImages").notEmpty().isArray(),
];

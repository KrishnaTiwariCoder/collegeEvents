import { check } from "express-validator";

export const createFormValidator = [
  check("formName").notEmpty(),
  check("description").notEmpty(),
  check("fields").isArray(),
  check("eventID").notEmpty(),
];

import { check } from "express-validator";

export const createEventValidator = [
  check("eventName").notEmpty(),
  check("description").notEmpty().isURL(),
  check("picture").notEmpty(),
  check("dateTime").notEmpty().isTime(),
  check("audience").notEmpty(),
];

export const updateEventValidator = [
  check("eventName").notEmpty(),
  check("description").notEmpty().isURL(),
  check("picture").notEmpty(),
  check("dateTime").notEmpty().isTime(),
  check("audience").notEmpty(),
];

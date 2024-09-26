import { Router } from "express";
import {
  deleteSocietyByID,
  getSocietiesByOwner,
  getSocietyByID,
  newSocietyController,
} from "../../controllers/societies/index.js";
import { authVerify, isRequestValidated } from "../../common/index.js";
import { createSocietyValidator } from "../../validators/society.js";
import { checkAdminRole } from "../../middlewares/index.js";

const routerSociety = Router();

routerSociety.post(
  "/create",
  authVerify,
  checkAdminRole,
  createSocietyValidator,
  isRequestValidated,
  newSocietyController
);
routerSociety.post("/getSociety/:societyID", authVerify, getSocietyByID);
routerSociety.post(
  "/getSocietiesByOwner/:adminID",
  authVerify,
  getSocietiesByOwner
);
routerSociety.post(
  "/deleteSociety/:societyID",
  authVerify,
  checkAdminRole,
  deleteSocietyByID
);
export default routerSociety;

import express from "express";
import {
  createRegistration,
  getRegistrationsByEvent,
  getRegistrationById,
  updateRegistrationStatus,
  getRegistrationsByUser,
} from "../../controllers/forms/index.js";
import { authVerify, isRequestValidated } from "../../common/index.js";
import { checkAdminRole } from "../../middlewares/index.js";
import { createFormValidator } from "../../validators/forms.js";

const router = express.Router();

// Routes
router.post(
  "/create",
  authVerify,
  checkAdminRole,
  createFormValidator,
  isRequestValidated,
  createRegistration
);
router.get("/formByEventID/:eventID", getRegistrationsByEvent);
router.get("/getById/:id", getRegistrationById);

router.get("/user/", authVerify, getRegistrationsByUser);

router.post(
  "/update/:id",
  authVerify,
  checkAdminRole,
  updateRegistrationStatus
);
export default router;

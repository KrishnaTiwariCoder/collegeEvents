import { Router } from "express";
import { adminExistsOrNot } from "../../middlewares/index.js";

import { adminLogin, adminRegister } from "../../validators/auth.js";

import {
  adminLoginController,
  adminProfileController,
  adminRegisterController,
} from "../../controllers/auth/admin.js";
import { authVerify, isRequestValidated } from "../../common/index.js";

const routerAdminAuth = Router();

routerAdminAuth.post(
  "/login",
  adminExistsOrNot,
  adminLogin,
  isRequestValidated,
  adminLoginController
);

routerAdminAuth.post(
  "/register",
  adminExistsOrNot,
  adminRegister,
  isRequestValidated,
  adminRegisterController
);

routerAdminAuth.post("/profile", authVerify, adminProfileController);

export default routerAdminAuth;

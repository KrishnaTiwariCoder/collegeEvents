import { Router } from "express";
import routerAdminAuth from "./auth/admin.js";
import routerSociety from "./societies/index.js";
import eventRouter from "./events/index.js";
import formRouter from "./forms/index.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("HELLO");
});

router.use("/admin", routerAdminAuth);
router.use("/society", routerSociety);
router.use("/events", eventRouter);
router.use("/forms", formRouter);

export default router;

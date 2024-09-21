import { Router } from "express";
import routerAdminAuth from "./auth/admin.js";
import routerSociety from "./societies/index.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("HELLO");
});

router.use("/admin", routerAdminAuth);
router.use("/society", routerSociety);

export default router;

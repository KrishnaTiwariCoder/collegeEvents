// routes/eventRoutes.js
import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../../controllers/events/index.js";
import { authVerify, isRequestValidated } from "../../common/index.js";
import { checkAdminRole } from "../../middlewares/index.js";
import {
  createEventValidator,
  updateEventValidator,
} from "../../validators/event.js";

const router = express.Router();

router.post(
  "/create",
  authVerify,
  checkAdminRole,
  createEventValidator,
  isRequestValidated,
  createEvent
);

router.get("/", authVerify, getAllEvents);

router.get("/:id", authVerify, getEventById);

router.put(
  "/:id",
  authVerify,
  checkAdminRole,
  updateEventValidator,
  isRequestValidated,
  updateEvent
);

router.delete("/delete/:id", authVerify, checkAdminRole, deleteEvent);

export default router;

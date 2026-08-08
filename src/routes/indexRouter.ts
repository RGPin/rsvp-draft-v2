import { Hono } from "hono";
import {
  deleteGuest,
  getMainPage,
  getSecretPage,
  postAddGuest,
  postFormResponse,
  postGuestResponse,
} from "../controllers/indexController";

const router = new Hono();

router.get("/", getMainPage);
router.post("/rsvp", postFormResponse);
router.post("/responses/:token", postGuestResponse);
router.get("/supersecretstuff", getSecretPage);
router.post("/supersecretstuff", postAddGuest);
router.delete("/supersecretstuff/:token", deleteGuest);

export default router;

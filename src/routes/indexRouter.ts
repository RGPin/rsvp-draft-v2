import { Hono } from "hono";
import {
  getMainPage,
  postFormResponse,
  postGuestResponse,
} from "../controllers/indexController";

const router = new Hono();

router.get("/", getMainPage);
router.post("/rsvp", postFormResponse);
router.post("/responses/:token", postGuestResponse);

export default router;

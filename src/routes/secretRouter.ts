import { Hono } from "hono";
import {
  deleteGuest,
  getSecretPage,
  postAddGuest,
} from "../controllers/secretController";

const router = new Hono();

router.get("/", getSecretPage);
router.post("/", postAddGuest);
router.delete("/:token", deleteGuest);

export default router;

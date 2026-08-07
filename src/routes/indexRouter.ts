import { Hono } from "hono";
import { getMainPage } from "../controllers/indexController";

const router = new Hono();

router.get("/", getMainPage);

export default router;

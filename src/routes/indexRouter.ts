import { Context, Hono } from "hono";
import { testController } from "../controllers/indexController";

const router = new Hono();

router.get("/", testController);

export default router;

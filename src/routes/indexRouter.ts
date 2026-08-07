import { Context, Hono } from "hono";
import { testController } from "../controllers/indexController";

const router = new Hono();

router.get("/test", testController);

export default router;

import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

import * as indexController from "../controllers/index.controller.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Hello World";
});

router.get("colors", indexController.getColors);

export default router;

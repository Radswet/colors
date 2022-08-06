import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { getColors } from "../controller/getColors.ts";
import { getColor } from "../controller/getColor.ts";
import { addColor } from "../controller/addColor.ts";
import { deleteColor } from "../controller/deleteColor.ts";
import { updateColor } from "../controller/updateColor.ts";

const router = new Router();

router
  .get("/colors", getColors)
  .get("/colors/:id", getColor)
  .post("/colors", addColor)
  .delete("/colors/:id", deleteColor)
  .put("/colors/:id", updateColor);

export default router;

import { remove } from "../repository/color.ts";
import * as doesColorExists from "../libs/doesColorExists.ts";

export async function deleteColor({
  params,
  response,
}: {
  params: any;
  response: any;
}) {
  const colorExists = await doesColorExists.findById(params.id);
  if (colorExists) {
    response.status = 200;
    response.body = await remove(params.id);
  } else {
    response.status = 404;
    response.body = { message: "Color not found" };
  }
}

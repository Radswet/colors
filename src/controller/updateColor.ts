import { update } from "../repository/color.ts";
import * as doesColorExists from "../libs/doesColorExists.ts";
import { Color } from "../interfaces/Color.ts";

export async function updateColor({
  request,
  response,
  params,
}: {
  request: any;
  response: any;
  params: any;
}) {
  const body = await request.body();
  const color: Color = await body.value;
  console.log(color);

  try {
    const colorExists = await doesColorExists.findById(params.id);

    if (colorExists) {
      response.status = 200;
      response.body = await update(color.name, color.hex, params.id);
    } else {
      response.status = 4;
      response.body = { message: "Color not found" };
    }
  } catch (error) {
    console.error(error);
  }
}

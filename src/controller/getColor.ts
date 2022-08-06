import { search } from "../repository/color.ts";
import * as doesColorExists from "../libs/doesColorExists.ts";

export async function getColor({
  params,
  response,
}: {
  params: any;
  response: any;
}) {
  try {
    console.log(params);
    const colorExists = await doesColorExists.findById(params.id);

    if (colorExists) {
      const result = await search(params);
      response.status = 200;
      response.body = result.rows;
    } else {
      response.status = 404;
      response.body = { message: "Color not found" };
    }
  } catch (error) {
    console.log(error);
  }
}

import { insert } from "../repository/color.ts";
import { Color } from "../interfaces/Color.ts";

export async function addColor({
  request,
  response,
}: {
  request: any;
  response: any;
}) {
  const body = await request.body();
  const color: Color = await body.value; // a json object
  console.log(color);

  if (color.hasOwnProperty("name") && color.hasOwnProperty("hex")) {
    response.body = 200;
    response.body = await insert(color);
  } else {
    response.body = { message: "Invalid Request" };
    response.status = 400;
  }
}

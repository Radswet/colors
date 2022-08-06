import { search } from "../repository/color.ts";

export async function getColors({ response }: { response: any }) {
  const result = await search();
  response.body = result.rows;
}

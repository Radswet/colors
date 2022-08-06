import { Response, Request } from "https://deno.land/x/oak@v10.6.0/mod.ts";

interface Color {
  id: number;
  name: string;
}

const colors: Color[] = [
  {
    id: 1,
    name: "red",
  },
];

export const getColors = ({ response }: { response: Response }) => {
  response.body = {
    mensage: "successful Query",
    colors,
  };
};

export const getColor = () => { };

export const createColor = async (
  { request,response,} : {request: Request; response: Response;}) => {
  
  const body = await request.body();
  console.log(body);
  response.body = {
    mensage: "successful Query",
  };
};
export const updateColor = () => { };
export const deleteColor = () => { };

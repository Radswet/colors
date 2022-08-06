import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const router = new Router();
const app = new Application();


router.get("/", ({response}) => {
    response.body = "Hello World";
});

app.use(router.routes());

console.log("Server running on port 8000");
await app.listen({ port: 8000 });
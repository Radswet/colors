import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import router from './routes/routes.ts'

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "Welcome to colors";
});

await app.listen({ port: 8000 });
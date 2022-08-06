import { Client } from "https://deno.land/x/mysql@v2.10.2/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";


const client = await new Client().connect({
  hostname: Deno.env.get("host"),
  username: Deno.env.get("username"),
  db: Deno.env.get("database"),
  password: Deno.env.get("password"),
});

export default client;

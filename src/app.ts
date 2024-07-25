import { catsModule } from "@/modules/(cats)";
import { dogsModule } from "@/modules/(dogs)";
import Elysia from "elysia";

export const app = new Elysia({ prefix: "/api" })
    .onError(({ code, error }) => {
        console.log(code);
        return new Response(JSON.stringify({ error: error.toString() ?? code }), { status: 500 });
    })
    .use(catsModule)
    .use(dogsModule);

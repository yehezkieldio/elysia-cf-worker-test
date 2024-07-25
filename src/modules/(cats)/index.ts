import Elysia from "elysia";

export const BASE_CAT_FACT_URL = "https://catfact.ninja/fact";

export const catsModule = new Elysia({ name: "Module.Cats" });

interface RandomCatFact {
    fact: string;
    length: number;
}

catsModule.group("/cats", (app) =>
    app.get("/fact/random", async () => {
        const response = await fetch(BASE_CAT_FACT_URL);
        const data: RandomCatFact = (await response.json()) as RandomCatFact;

        return {
            fact: data.fact,
        };
    }),
);

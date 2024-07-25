import Elysia from "elysia";

export const BASE_DOG_FACT_URL = "https://dog-api.kinduff.com/api/facts?number=1";

export const dogsModule = new Elysia({ name: "Module.Dogs" });

interface RandomDogFact {
    facts: string[];
    success: boolean;
}

dogsModule.group("/dogs", (app) =>
    app.get("/fact/random", async () => {
        const response = await fetch(BASE_DOG_FACT_URL);
        const data: RandomDogFact = (await response.json()) as RandomDogFact;

        return {
            fact: data.facts[0],
        };
    }),
);

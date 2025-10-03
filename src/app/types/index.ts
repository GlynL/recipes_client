export type Ingredient = {
    id: string;
    name: string;
}

export type Step = {
    id: string;
    name: string;
    order: number;
}

export type Recipe = {
    id: string;
    name: string;
    ingredients: Ingredient[];
    steps: Step[];
}
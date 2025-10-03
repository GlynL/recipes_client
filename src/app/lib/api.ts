import { Recipe } from "app/types";

const BASE_URL = "http://localhost:5222/api";

const getRecipes = async (): Promise<Recipe[]> => {
  const url = `${BASE_URL}/recipes`
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error fetching recipes.")
  } 
  return await res.json();
};

const getRecipe = async (id: string): Promise<Recipe | undefined>  => {
  const url = `${BASE_URL}/recipes/${id}`
  console.log(url)
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error fetching recipes.")
  } 
  return await res.json();
};

const saveRecipe = async (recipe: Recipe) => {
  const url = `${BASE_URL}/recipes`
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  if(!res.ok){
    throw new Error("Error with res")
  };

  return await res.json();
}

const updateRecipe = async (recipe: Recipe) => {
  const url = `${BASE_URL}/recipes/${recipe.id}`
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  if(!res.ok){
    console.log(res);
    throw new Error("Error with res")
  };
}

export const api = {
  getRecipes,
  getRecipe,
  saveRecipe,
  updateRecipe,
};

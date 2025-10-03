import { api } from "@lib/api";
import { RecipeCard } from "@app/components/RecipeCard";
import { Flex } from "@chakra-ui/react";

export default async function Home() {
  const recipes = await api.getRecipes();
  return (
    <Flex gap="8">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </Flex>
  );
}

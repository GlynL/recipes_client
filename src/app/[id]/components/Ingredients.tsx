import * as types from "@app/types";
import { Ingredient } from "./Ingredient";
import { Box, Heading, List } from "@chakra-ui/react";

type IngredientsProps = {
  ingredients: types.Ingredient[];
};

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <Box>
      <Heading as="h3" size="lg">
        Ingredients
      </Heading>
      <List.Root pl="8">
        {ingredients.map((ingredient) => (
          <Ingredient {...ingredient} key={ingredient.id} />
        ))}
      </List.Root>
    </Box>
  );
};

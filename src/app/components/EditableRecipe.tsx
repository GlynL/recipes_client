"use client";
import * as types from "@app/types";
import { Flex, Heading, Field, Input, List, Button } from "@chakra-ui/react";
import { EditableIngredient } from "./EditableIngredient";
import { EditableStep } from "./EditableStep";
import { Recipe } from "@app/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

type EditableRecipeProps = {
  recipe: Recipe;
  updateRecipe: (recipe: Recipe) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isEditable?: boolean;
};

const newIngredient = (): types.Ingredient => ({
  id: crypto.randomUUID(),
  name: "",
});

const newStep = (order: number): types.Step => {
  const step = {
    id: crypto.randomUUID(),
    name: "",
    order,
  };

  return step;
};

export const EditableRecipe = ({
  recipe,
  updateRecipe,
  handleSubmit,
  isEditable = true,
}: EditableRecipeProps) => {
  const [justAdded, setJustAdded] = useState<string>("");
  const router = useRouter();

  const addIngredient = () => {
    const ingredient = newIngredient();
    setJustAdded(ingredient.id);
    updateRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, ingredient],
    });
  };

  const addStep = () => {
    const order = recipe.steps.length;
    const step = newStep(order);

    setJustAdded(step.id);

    updateRecipe({
      ...recipe,
      steps: [...recipe.steps, step],
    });
  };

  const updateIngredient = (value: string, id: string) => {
    updateRecipe({
      ...recipe,
      ingredients: recipe.ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, name: value } : ingredient
      ),
    });
  };

  const updateStep = (value: string, id: string) => {
    updateRecipe({
      ...recipe,
      steps: recipe.steps.map((step) =>
        step.id === id ? { ...step, name: value } : step
      ),
    });
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      flexDir="column"
      alignItems={"flex-start"}
      gap="5"
    >
      <Field.Root>
        <Field.Label htmlFor="name">Name</Field.Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={(e) => updateRecipe({ ...recipe, name: e.target.value })}
        />
      </Field.Root>
      <Heading size="lg" as="h3">
        Ingredients
      </Heading>
      <List.Root pl="8">
        {recipe.ingredients.map((ingredient) => (
          <EditableIngredient
            ingredient={ingredient}
            updateIngredient={updateIngredient}
            key={ingredient.id}
            defaultEdit={justAdded === ingredient.id}
            isEditable={isEditable}
          />
        ))}
      </List.Root>
      <Button type="button" size="xs" onClick={addIngredient}>
        Add
      </Button>
      <Heading size="lg" as="h3">
        Steps
      </Heading>
      <List.Root as="ol" pl="8">
        {recipe.steps.map((step) => (
          <EditableStep
            step={step}
            updateStep={updateStep}
            key={step.id}
            defaultEdit={justAdded === step.id}
            isEditable={isEditable}
          />
        ))}
      </List.Root>
      <Button type="button" size="xs" onClick={addStep}>
        Add
      </Button>
      <Button type="button" onClick={() => router.back()}>
        cancel
      </Button>
      <Button type="submit">Save</Button>
    </Flex>
  );
};

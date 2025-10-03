"use client";
import React, { useState } from "react";
import * as types from "@app/types";
import { redirect } from "next/navigation";
import { Flex, Heading, Separator } from "@chakra-ui/react";
import { EditableRecipe } from "@app/components/EditableRecipe";
import { api } from "@lib/api";

export const EditRecipe = ({ recipe }: { recipe: types.Recipe }) => {
  const [editRecipe, setEditRecipe] = useState<types.Recipe>(recipe);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.updateRecipe(editRecipe);
    redirect(`/${recipe.id}`);
  };

  return (
    <Flex flexDir="column" gap="5" alignItems={"flex-start"}>
      <Heading as="h2" size="4xl">
        Edit Recipe
      </Heading>
      <Separator w="100%" />
      <EditableRecipe
        recipe={editRecipe}
        updateRecipe={setEditRecipe}
        handleSubmit={handleSubmit}
      />
    </Flex>
  );
};

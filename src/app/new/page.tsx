"use client";
import React, { useState } from "react";
import * as types from "@app/types";
import { api } from "@lib/api";
import { redirect } from "next/navigation";
import { Flex, Heading, Separator } from "@chakra-ui/react";
import { EditableRecipe } from "@app/components/EditableRecipe";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [recipe, setRecipe] = useState<types.Recipe>({
    id: crypto.randomUUID(),
    name: "",
    ingredients: [],
    steps: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.saveRecipe(recipe);
    redirect("/");
  };

  return (
    <Flex flexDir="column" gap="5" alignItems={"flex-start"}>
      <Heading as="h2" size="4xl">
        Add New Recipe
      </Heading>
      <Separator w="100%" />
      <EditableRecipe
        recipe={recipe}
        updateRecipe={setRecipe}
        handleSubmit={handleSubmit}
      />
    </Flex>
  );
};

export default Page;

import { api } from "app/lib/api";
import React from "react";
import { Ingredients } from "./components/Ingredients";
import { Steps } from "./components/Steps";
import {
  Button,
  Flex,
  Heading,
  Link,
  Separator,
  Stack,
} from "@chakra-ui/react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async ({ params }: PageProps) => {
  const { id } = await params;
  const recipe = await api.getRecipe(id);

  if (!recipe) {
    return <div>Recipe Not Found</div>;
  }

  return (
    <Flex flexDir="column" alignItems="flex-start" gap="5">
      <Heading size="4xl">{recipe.name}</Heading>
      <Separator w="100%" />
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.steps} />
      <Button asChild>
        <Link href={`/${id}/edit`}>Edit</Link>
      </Button>
    </Flex>
  );
};

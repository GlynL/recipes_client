import React from "react";
import { Recipe } from "../types";
import Link from "next/link";
import { Button, Card } from "@chakra-ui/react";

type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe: { id, name },
}) => {
  return (
    <Card.Root width="320px">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button asChild>
          <Link href={`/${id}`}>View</Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

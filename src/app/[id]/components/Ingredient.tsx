import React from "react";
import { Ingredient as IngredientType } from "@app/types";
import { List } from "@chakra-ui/react";

type IngredientProps = IngredientType;

export const Ingredient = ({ id, name }: IngredientProps) => {
  return (
    <List.Item>
      <span>{name}</span>
    </List.Item>
  );
};

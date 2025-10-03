import * as types from "@app/types";
import { Editable, List } from "@chakra-ui/react";

type EditableIngredientProps = {
  ingredient: types.Ingredient;
  updateIngredient: (value: string, id: string) => void;
  defaultEdit?: boolean;
  isEditable: boolean;
};

export const EditableIngredient = ({
  ingredient,
  updateIngredient,
  defaultEdit = false,
  isEditable,
}: EditableIngredientProps) => {
  return (
    <List.Item>
      <Editable.Root
        value={ingredient.name}
        onValueChange={(e) => updateIngredient(e.value, ingredient.id)}
        defaultEdit={defaultEdit}
        readOnly={!isEditable}
      >
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>
    </List.Item>
  );
};

import * as types from "@app/types";
import { Editable, List } from "@chakra-ui/react";

type EditableStepProps = {
  step: types.Step;
  updateStep: (value: string, id: string) => void;
  defaultEdit?: boolean;
  isEditable: boolean;
};

export const EditableStep = ({
  step,
  updateStep,
  defaultEdit = false,
  isEditable,
}: EditableStepProps) => {
  return (
    <List.Item>
      <Editable.Root
        value={step.name}
        onValueChange={(e) => updateStep(e.value, step.id)}
        defaultEdit={defaultEdit}
        readOnly={!isEditable}
      >
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>
    </List.Item>
  );
};

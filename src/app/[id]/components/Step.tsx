import * as types from "@app/types";
import { List } from "@chakra-ui/react";

type StepProps = { step: types.Step };

export const Step = ({ step: { id, name } }: StepProps) => {
  return (
    <List.Item>
      <span>{name}</span>
    </List.Item>
  );
};

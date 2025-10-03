import * as types from "@app/types";
import { Step } from "./Step";
import { Box, Heading, List } from "@chakra-ui/react";

type StepsProps = { steps: types.Step[] };

export const Steps = ({ steps }: StepsProps) => {
  const orderedSteps = steps.sort((a, b) => a.order - b.order);

  return (
    <Box>
      <Heading size="lg" as="h3">
        Steps
      </Heading>
      <List.Root as="ol" pl="8">
        {orderedSteps.map((step) => (
          <Step step={step} key={step.id} />
        ))}
      </List.Root>
    </Box>
  );
};

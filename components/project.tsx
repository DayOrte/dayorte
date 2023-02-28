import { Card, CardBody, Stack, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface ProjectProps extends PropsWithChildren {
  title: string;
}

export default function Project(props: ProjectProps) {
  return (
    <Card>
      <CardBody>
        {props.children}
        <Stack mt="6" spacing="3">
          <Heading>{props.title}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}

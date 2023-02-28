import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  CardFooter,
  Button,
  Link,
} from "@chakra-ui/react";
import CaptionCarousel from "components/carousel";
import Project from "@/components/project";

export default function LandingPage() {
  return (
    <Container maxW={"8xl"} centerContent>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Card>
            <CardHeader>
              <Heading
                fontWeight={700}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                Dallana S Ortega
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontWeight={600}>
                Hello! Allow me to introduce myself: I was born in a very small
                town in Michoacan, Mexico, but currently call Kansas City,
                Missouri my home. My passion lies in creating art, and I devote
                most of my time to this pursuit. Thank you for taking the time
                to view my portfolio!
              </Text>
            </CardBody>
            <CardFooter
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Link
                href="https://www.stargaze.zone/profile/stars1zt956ml3rmtng0k095nfh26f9udjleg2unl9xw/all"
                isExternal
              >
                <Button flex="1" variant="ghost">
                  Stargaze
                </Button>
              </Link>
              <Link href="https://twitter.com/ydallana1" isExternal>
                <Button flex="1" variant="ghost">
                  Twitter
                </Button>
              </Link>
              <Link href="https://dribbble.com/odallana" isExternal>
                <Button flex="1" variant="ghost">
                  Dribbble
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          ></Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Selfie"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src="/selfie.jpg"
            />
          </Box>
        </Flex>
      </Stack>
      <Card>
        <CardHeader>
          <Heading
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            Projects
          </Heading>
        </CardHeader>
      </Card>
      <SimpleGrid columns={[1, null, 2, null, 3]} spacing="5" mt="5">
        <Project title="Naturally Psychedelic">
          <CaptionCarousel
            path={"/naturally-psychedelic"}
            image_count={13}
          ></CaptionCarousel>
        </Project>
        <Project title="Dad's Farm">
          <CaptionCarousel path={"/dad"} image_count={1}></CaptionCarousel>
        </Project>
        <Project title="Valentine's Day Requests">
          <CaptionCarousel
            path={"/valentines"}
            image_count={5}
          ></CaptionCarousel>
        </Project>
        <Project title="Women from Michoacan">
          <CaptionCarousel
            path={"/michoacan"}
            image_count={4}
          ></CaptionCarousel>
        </Project>
      </SimpleGrid>
    </Container>
  );
}

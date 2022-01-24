import {
  Flex,
  Image,
  Text,
  VStack,
  Divider,
  Center,
  SimpleGrid,
  Box,
  HStack,
  Stack,
} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { useContinents } from "../contexts/ContinentsContext";

export default function Home() {
  
  const continents = useContinents()

  return (
    <Flex direction="column">
      <Header />
      <Box position="relative" height={["600", "600", "600", "400"]}>
        <Image
          position="absolute"
          src="banners/banner.png"
          w="100%"
          h={["550", "550", "550", "350"]}
          zIndex="-100"
        />
        <Stack
          direction={["column", "column", "column", "row"]}
          width="80%"
          m="0 auto"
          justify="space-between"
          h="100%"
          align="center"
        >
          <VStack
            w={["95%", "90%", "80%", "500px"]}
            mt={["20", "20", "20", "0"]}
            textAlign={["center", "center", "center", "start"]}
          >
            <Text
              fontWeight="500"
              fontSize="32"
              color="white.100"
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text
              fontWeight="400"
              fontSize="20"
              color="white.500"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>
          <Image src="icons/airplane.svg" pt={["0", "0", "0", "20"]} />
        </Stack>
      </Box>
      <SimpleGrid
        mt="20"
        columns={[1, 2, 3, 5]}
        rows={[5, 3, 2, 1]}
        mx="20"
        spacingY="10"
      >
        <VStack spacing="6" textAlign="center">
          <Image src="icons/cocktail.svg" h="75" />
          <Text
            fontSize={["20", "22", "22", "24"]}
            fontWeight="600"
            color="gray.700"
          >
            vida noturna
          </Text>
        </VStack>
        <VStack spacing="6" textAlign="center">
          <Image src="icons/surf.svg" h="75" />
          <Text
            fontSize={["20", "22", "22", "24"]}
            fontWeight="600"
            color="gray.700"
          >
            praia
          </Text>
        </VStack>
        <VStack spacing="6" textAlign="center">
          <Image src="icons/building.svg" h="75" />
          <Text
            fontSize={["20", "22", "22", "24"]}
            fontWeight="600"
            color="gray.700"
          >
            moderno
          </Text>
        </VStack>
        <VStack spacing="6" textAlign="center">
          <Image src="icons/museum.svg" h="75" />
          <Text
            fontSize={["20", "22", "22", "24"]}
            fontWeight="600"
            color="gray.700"
          >
            clássico
          </Text>
        </VStack>
        <VStack spacing="6" textAlign="center">
          <Image src="icons/earth.svg" h="75" />
          <Text
            fontSize={["20", "22", "22", "24"]}
            fontWeight="600"
            color="gray.700"
          >
            e mais...
          </Text>
        </VStack>
      </SimpleGrid>
      <Center mt="90px" mb="50px">
        <Divider orientation="horizontal" bg="gray.700" h="2px" w="90px" />
      </Center>
      <VStack w="90%" m="0 auto">
        <Text fontSize={["28", "32", "32", "36"]} fontWeight="500" textAlign="center">
          Vamos nessa?
        </Text>
        <Text fontSize={["28", "32", "32", "36"]} fontWeight="500" textAlign="center">
          Então escolha seu continente
        </Text>
      </VStack>
      <Carousel continents={continents} />
    </Flex>
  );
}

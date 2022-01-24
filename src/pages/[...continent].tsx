import { useRouter } from "next/router";
import {
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Box,
  Icon,
  Stack,
  Tooltip,
} from "@chakra-ui/react";

import { useContinents } from "../contexts/ContinentsContext";
import { Header } from "../components/Header";

import { FiInfo } from "react-icons/fi";
import { CountryCard } from "../components/CountryCard";

export default function Continent() {
  const {
    query: { continent },
  } = useRouter();

  const pageContinent = useContinents().find(
    (item) => item.name === String(continent)
  );

  return (
    <Flex direction="column">
      <Header goBack />
      <Box w="100%" position="relative">
        <Image
          src={pageContinent.pageImage}
          objectFit="cover"
          h="500"
          w="100%"
          position="absolute"
          top="0"
          zIndex="-100"
        />
        <VStack w="80%" m="0 auto" align="start" pt="350" spacing="100" mb="10">
          <Text fontSize="48" fontWeight="600" color="white.100">
            {pageContinent.name}
          </Text>
          <Stack
            direction={["column", "column", "column", "row"]}
            align="center"
            justify="space-between"
            w="100%"
            pt="75"
            spacing={["10", "10", "10", "0"]}
          >
            <Text
              color="gray.700"
              fontSize="24"
              fontWeight="400"
              w={["95%", "90%", "500px", "600px"]}
              textAlign="justify"
            >
              {pageContinent.text}
            </Text>
            <Stack
              align="center"
              spacing="10"
              direction={["column", "column", "column", "row"]}
            >
              <VStack textAlign="center" spacing="0">
                <Text color="yellow.900" fontSize="48" fontWeight="600">
                  {pageContinent.numberOfCountries}
                </Text>
                <Text color="gray.700" fontSize="24" fontWeight="600">
                  países
                </Text>
              </VStack>
              <VStack textAlign="center" spacing="0">
                <Text color="yellow.900" fontSize="48" fontWeight="600">
                  {pageContinent.numberOfLanguages}
                </Text>
                <Text color="gray.700" fontSize="24" fontWeight="600">
                  línguas
                </Text>
              </VStack>
              <VStack textAlign="center" spacing="0">
                <Text color="yellow.900" fontSize="48" fontWeight="600">
                  {pageContinent.numberOfCities}
                </Text>
                <HStack>
                  <Text color="gray.700" fontSize="24" fontWeight="600">
                    cidades +100
                  </Text>
                  <Tooltip
                    hasArrow
                    label="Quantidade de cidades divididas por 100"
                    bg="gray.700"
                    color="white.100"
                    borderRadius="5"
                    p="3"
                  >
                    <Box>
                      <Icon as={FiInfo} />
                    </Box>
                  </Tooltip>
                </HStack>
              </VStack>
            </Stack>
          </Stack>
          <VStack align="start" w="100%" spacing="5">
            <Text
              fontSize="36"
              fontWeight="500"
              color="gray.700"
              textShadow="-1px 0 rgba(255, 186, 8, .5), 0 1px rgba(255, 186, 8, .5), 1px 0 rgba(255, 186, 8, .5), 0 -1px rgba(255, 186, 8, .5)"
            >
              Cidades +100
            </Text>
            <SimpleGrid
              w="100%"
              columns={[1, 1, 2, 3, 4]}
              rows={[4, 3, 2, 1, 1]}
              spacingY="10"
            >
              {pageContinent.countries.map((country, key) => (
                <CountryCard country={country} key={key} />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
}

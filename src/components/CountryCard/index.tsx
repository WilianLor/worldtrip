import { HStack, Image, VStack, Text, Divider } from "@chakra-ui/react";
import { Country } from "../../contexts/continentsContext";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => (
  <VStack
    key={country.name}
    w="240px"
    h="270"
    borderRadius="5"
    align="center"
    justify="space-between"
    boxShadow="0 0 0 1px rgba(255, 186, 8, .5) inset"
  >
    <Image
      src={country.dc.image}
      boxShadow="0 0 0 1px rgba(255, 186, 8, .5) inset"
      borderRadius="5px 5px 0 0"
      h="160"
      w="100%"
      objectFit="cover"
    />
    <HStack align="center" w="80%" justify="space-between" flex="1">
      <VStack align="start">
        <Text color="gray.700" fontWeight="600" fontFamily="Barlow" fontSize="20" textShadow="-1px 0 rgba(255, 186, 8, .5), 0 1px rgba(255, 186, 8, .5), 1px 0 rgba(255, 186, 8, .5), 0 -1px rgba(255, 186, 8, .5)">
          {country.dc.name}
        </Text>
        <Text color="gray.500" fontWeight="500" fontFamily="Barlow" fontSize="16" textShadow="-1px 0 rgba(255, 186, 8, .5), 0 1px rgba(255, 186, 8, .5), 1px 0 rgba(255, 186, 8, .5), 0 -1px rgba(255, 186, 8, .5)">
          {country.name}
        </Text>
      </VStack>
      <Image
        src={country.flag}
        boxShadow="0 0 0 1px rgba(255, 186, 8, .5) inset"
        borderRadius="50%"
      />
    </HStack>
  </VStack>
);

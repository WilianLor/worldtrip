import { Image, HStack, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { VscChevronLeft } from "react-icons/vsc";

import Link from "next/link";

interface HeaderProps {
  goBack?: boolean;
}

export const Header = ({ goBack }: HeaderProps) => {
  return (
    <HStack
      as="header"
      w="100%"
      justify={["space-around", "center"]}
      py="6"
      position="relative"
    >
      {!!goBack && (
        <Link href="/">
          <ChakraLink
            as="a"
            display="flex"
            alignItems="center"
            position={["static", "absolute"]}
            left={["15", "50", "150"]}
          >
            <Icon as={VscChevronLeft} fontSize="32" />
          </ChakraLink>
        </Link>
      )}

      <Image src="icons/logo.svg" />
    </HStack>
  );
};

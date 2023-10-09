import {
  Container,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { Logo } from "./Logo";
import { Search } from "./Search";

const International = () => {
  return (
    <HStack color={"whiteAlpha.800"} spacing={20}>
      <Flex alignItems={"center"}>
        <Icon
          as={FiPhoneCall}
          width={{ base: 4, lg: 6 }}
          height={{ base: 4, lg: 6 }}
          color={"orange.600"}
          mr={"10px"}
        />
        <VStack fontSize={{ base: ".5rem", lg: ".8rem" }}>
          <Text fontWeight={600}>Hot line: 094.162.8017</Text>
          <Divider borderColor={"gray.400"} />
          <Text>Thứ 2 - Thứ 7</Text>
        </VStack>
      </Flex>
      <Flex alignItems={"center"}>
        <Icon
          as={AiOutlineGlobal}
          width={{ base: 4, lg: 6 }}
          height={{ base: 4, lg: 6 }}
          color={"orange.600"}
          mr={"10px"}
        />
        <VStack fontSize={{ base: ".5rem", lg: ".8rem" }}>
          <Text fontWeight={600}>Trạm Tuyển Sinh - AUM</Text>
          <Divider borderColor={"gray.400"} />
          <Text>116 Trần Vỹ, Mai Dịch, Cầu Giấy, Hà Nội</Text>
        </VStack>
      </Flex>
    </HStack>
  );
};

export const HeaderTop = ({ hasSearch }: { hasSearch?: boolean }) => {
  return (
    <Container maxW={"6xl"}>
      <HStack align={"center"} justify={"space-between"} w={"100%"}>
        <Logo />
        <International />
        {hasSearch && (
          <HStack flex={1} justify={"end"}>
            <Search />
          </HStack>
        )}
      </HStack>
    </Container>
  );
};

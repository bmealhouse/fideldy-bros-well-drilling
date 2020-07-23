import * as React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/core";

export default ({
  position,
  image,
  heading,
  description,
  buttonText,
  ...props
}) => (
  <Box {...props} bg={position === "left" ? "white" : "white"}>
    <Box mx="auto" maxWidth="containers.lg">
      <Flex
        direction={{ base: "column", md: "row" }}
        mx={{ base: 0, sm: 8 }}
        bg="white"
        shadow={{ base: "none", sm: "xl" }}
      >
        <Box
          flex="0 0 50%"
          order={{ md: position === "left" ? 0 : 1 }}
          borderColor="#333"
          borderTopWidth={{ base: 7, sm: 0 }}
        >
          <Image
            src={image}
            alt={`${heading} photo`}
            size={{ base: 325, md: 400 }}
            minWidth="100%"
            objectFit="cover"
          />
        </Box>
        <Box flex="0 0 50%" px={8} py={6} borderColor="#333" borderTopWidth={7}>
          <Heading as="h2" size="xl" fontWeight={700} letterSpacing="tighter">
            {heading}
          </Heading>
          <Text mt={2} mb={4} letterSpacing="tight">
            {description}
          </Text>
          <Button
            as="a"
            // @ts-ignore "href" is not recognized as a valid prop when using the <Button as="a" /> component
            href="#contact-us"
            variantColor="blue"
            variant="outline"
            rightIcon="chevron-right"
          >
            {buttonText}
          </Button>
        </Box>
      </Flex>
    </Box>
  </Box>
);

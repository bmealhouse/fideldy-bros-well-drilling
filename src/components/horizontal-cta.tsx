import * as React from "react";
import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/core";

export default ({ position, image, heading, children, ...props }) => (
  <Flex {...props} direction={{ base: "column", sm: "row" }}>
    <Image
      order={{ sm: position === "left" ? 0 : 1 }}
      src={image}
      alt={`${heading} photo`}
      size="100%"
      borderY="10px solid"
      borderColor="dark"
    />
    <Box px={8} py={6}>
      <Heading as="h2" size="xl" fontWeight={700} letterSpacing="tighter">
        {heading}
      </Heading>
      <Text mt={2} mb={4} letterSpacing="tight">
        {children}
      </Text>
      <Button
        as="a"
        // @ts-ignore "href" is not recognized as a valid prop when using the <Button as="a" /> component
        href="#contact-us"
        variantColor="blue"
        variant="outline"
        rightIcon="chevron-right"
      >
        Contact us about {heading.toLowerCase()}
      </Button>
    </Box>
  </Flex>
);

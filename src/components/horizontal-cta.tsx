import * as React from "react";
import { Box, Flex, Heading, Image, Divider, Text } from "@chakra-ui/core";

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
      <Text my={2} letterSpacing="tight">
        {children}
      </Text>
      {/* <Divider my={6} /> */}
    </Box>
  </Flex>
);

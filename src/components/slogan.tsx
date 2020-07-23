import * as React from "react";
import { Box, Heading } from "@chakra-ui/core";

export default () => (
  <Box bg="blackAlpha.50">
    <Box
      as="hgroup"
      mx="auto"
      mb={{ base: 0, sm: 20 }}
      px={8}
      py={20}
      maxWidth="containers.lg"
    >
      <Heading as="h1" size="2xl" fontWeight={740} letterSpacing="tighter">
        Professional well drilling since 1958.
      </Heading>
    </Box>
  </Box>
);

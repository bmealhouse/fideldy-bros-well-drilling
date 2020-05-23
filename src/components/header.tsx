import * as React from "react";
import { Box, Heading, Image } from "@chakra-ui/core";
import logo from "../assets/logo.png";

export default (props) => (
  <Box as="header" {...props}>
    <Box bg="dark" pl={4} pr={6} py={8}>
      <Image src={logo} alt="Fideldy Bros Well Drilling" size="100%" />
    </Box>
    <Box as="hgroup" px={8} py={16}>
      <Heading as="h1" size="2xl" fontWeight={740} letterSpacing="tighter">
        Professional well drilling since 1958
      </Heading>
    </Box>
  </Box>
);

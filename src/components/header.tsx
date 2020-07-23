import * as React from "react";
import { Box, Image } from "@chakra-ui/core";
import logo from "../assets/logo.png";

export default () => (
  <Box as="header" bg="dark">
    <Box mx="auto" pl={5} pr={6} py={8} maxWidth="containers.lg">
      <Image src={logo} alt="Fideldy Bros Well Drilling" maxH={119} />
    </Box>
  </Box>
);

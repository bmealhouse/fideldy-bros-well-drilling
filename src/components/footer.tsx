import * as React from "react";
import { Box, Flex, List, Link, ListItem, Text } from "@chakra-ui/core";

export default () => (
  <Box as="footer" bg="dark" color="white">
    <Box mx="auto" px={8} py={20} maxWidth="containers.lg">
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "initial", md: "space-between" }}
        alignItems={{ base: "initial", md: "center" }}
        mb={{ base: 4, md: 8 }}
      >
        <Box mb={{ base: 4, md: 0 }}>
          <Text as="strong">Fideldy Bros Well Drilling</Text>
          <Text as="address">
            31822 East Bass Lake Road
            <br />
            Grand Rapids, MN 55744
          </Text>
        </Box>
        <List mb={{ base: 4, md: 0 }}>
          <Text as="strong">Contact</Text>
          <ListItem>
            <Link href="tel:+12189990106" color="blue.300">
              218-999-0106
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:troy@fideldywelldrilling.com" color="blue.300">
              troy@fideldywelldrilling.com
            </Link>
          </ListItem>
        </List>
        <Box>
          <Text as="strong">Emergency</Text>
          <List mt={1}>
            <ListItem>
              <Link href="tel:+12182446292" color="blue.300">
                218-244-6292
              </Link>
            </ListItem>
            <ListItem>
              <Link href="tel:+12183601569" color="blue.300">
                218-360-1569
              </Link>
            </ListItem>
          </List>
        </Box>
      </Flex>
      <Text as="small">Copyright © Fideldy Bros Well Drilling</Text>
    </Box>
  </Box>
);

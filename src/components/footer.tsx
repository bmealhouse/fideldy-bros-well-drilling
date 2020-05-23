import * as React from "react";
import { Box, List, Link, ListItem, Stack, Text } from "@chakra-ui/core";

export default (props) => (
  <Box {...props} as="footer" px={8} py={12} bg="dark" color="white">
    <Stack spacing={8}>
      <Box>
        <Text as="strong">Fideldy Bros Well Drilling</Text>
        <Text as="address">
          31822 East Bass Lake Road
          <br />
          Grand Rapids, MN 55744
        </Text>
        <List mt={4}>
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
      </Box>
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
      <Text as="small">Copyright © Fideldy Bros Well Drilling</Text>
    </Stack>
  </Box>
);

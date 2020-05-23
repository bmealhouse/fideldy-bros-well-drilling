import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/core";

export default (props) => (
  <Box {...props} id="contact-us" px={8} py={20} bg="blackAlpha.50">
    <Heading as="h2" size="2xl" fontWeight={740} letterSpacing="tighter">
      Contact Fideldy Bros Well Drilling at{" "}
      <Link href="tel:+12189990106" color="blue.500" whiteSpace="nowrap">
        218-999-0106
      </Link>{" "}
      <Text
        fontSize="lg"
        fontWeight={500}
        lineHeight="base"
        letterSpacing="tighter"
      >
        for all your Northern Minnesota well drilling service needs.
      </Text>
    </Heading>
    <Box mt={8}>
      <Stack spacing={3}>
        <FormControl>
          <Input placeholder="Name" size="lg" variant="flushed" />
          <FormErrorMessage>Please enter your name.</FormErrorMessage>
        </FormControl>
        <FormControl>
          <Input placeholder="Phone" size="lg" variant="flushed" />
          <FormErrorMessage>Please enter your phone.</FormErrorMessage>
        </FormControl>
        <FormControl>
          <Input placeholder="Email" size="lg" variant="flushed" />
          <FormErrorMessage>Please enter your email.</FormErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            as="textarea"
            placeholder="Message"
            size="lg"
            variant="flushed"
            height={24}
            mt={3}
          />
          <FormErrorMessage>Please enter your message.</FormErrorMessage>
        </FormControl>
        <Button type="submit" variantColor="blue" leftIcon="email">
          Send
        </Button>
      </Stack>
    </Box>
  </Box>
);

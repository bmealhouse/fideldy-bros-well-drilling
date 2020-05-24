import * as React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/core";

export default (props) => (
  <Box {...props} id="contact-us" bg="blackAlpha.50">
    <Box mx="auto" px={8} py={20} maxWidth="containers.lg">
      <Heading
        as="h2"
        size="2xl"
        mb={8}
        fontWeight={740}
        letterSpacing="tighter"
      >
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
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        mb={8}
      >
        <Stack spacing={3} flex={1} mr={{ base: 0, md: 4 }}>
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
        </Stack>
        <FormControl flex={1} mt={3} ml={{ base: 0, md: 4 }}>
          <Textarea
            placeholder="Message"
            size="lg"
            variant="flushed"
            h={{ base: 24, md: "100%" }}
          />
          <FormErrorMessage>Please enter your message.</FormErrorMessage>
        </FormControl>
      </Flex>
      <Button type="submit" size="lg" variantColor="blue" leftIcon="email">
        Send
      </Button>
    </Box>
  </Box>
);

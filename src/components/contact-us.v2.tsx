import * as React from "react";
import { Formik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/core";
import fideldy_bros from "../assets/fideldy-bros.jpg";

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
          <FormControl flex={1} mt={{ base: 4, md: 1 }} ml={{ base: 0, md: 4 }}>
            <Textarea
              placeholder="Message"
              size="lg"
              variant="flushed"
              h={{ base: 24, md: "100%" }}
            />
            <FormErrorMessage>Please enter your message.</FormErrorMessage>
          </FormControl>
        </Stack>
        <Box
        // flex="0 0 50%"
        // order={{ md: position === "left" ? 0 : 1 }}
        // borderColor="#333"
        // borderTopWidth={{ base: 7, sm: 0 }}
        >
          <Image
            src={fideldy_bros}
            alt="the fideldy brothers"
            size={{ base: 125, md: 200 }}
            minWidth="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
      <Button type="submit" size="lg" variantColor="blue" leftIcon="email">
        Send
      </Button>
    </Box>
  </Box>
);

function FormikExample() {
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value !== "Naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            variantColor="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

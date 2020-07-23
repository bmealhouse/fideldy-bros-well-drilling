import * as React from "react";
import { useState } from "react";
import { Field, Formik } from "formik";
import { object, string } from "yup";
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

const schema = object().shape({
  name: string().required(),
  phone: string(),
  email: string().email().required(),
  message: string().required(),
});

export default (props) => {
  const [hasSentEmail, setHasSentEmail] = useState(false);

  return (
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
        <Formik
          initialValues={{ name: "", phone: "", email: "", message: "" }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            setTimeout(async () => {
              try {
                await fetch("/api/contact", {
                  method: "POST",
                  body: JSON.stringify(values),
                });
                setHasSentEmail(true);
              } catch {}
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent="space-between"
                mb={8}
              >
                <Stack spacing={3} flex={1} mr={{ base: 0, md: 4 }}>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <Input
                          {...field}
                          aria-label="Name"
                          placeholder="Name"
                          size="lg"
                          variant="flushed"
                        />
                        <Box display={{ md: "none" }}>
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ field, form }) => (
                      <FormControl>
                        <Input
                          {...field}
                          aria-label="Phone"
                          placeholder="Phone"
                          size="lg"
                          variant="flushed"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <Input
                          {...field}
                          type="email"
                          aria-label="Email"
                          placeholder="Email"
                          size="lg"
                          variant="flushed"
                        />
                        <Box h={{ md: 17 }} mt={{ md: "8px" }}>
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                </Stack>
                <Field name="message">
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.message && form.touched.message}
                      flex={1}
                      mt={{ base: 4, md: 1 }}
                      ml={{ base: 0, md: 4 }}
                    >
                      <Textarea
                        {...field}
                        aria-label="Message"
                        placeholder="Message"
                        size="lg"
                        variant="flushed"
                        h={{ base: 24, md: 140 }}
                      />
                      <Box h={{ md: 17 }} mt={{ md: "8px" }}>
                        <FormErrorMessage>
                          {form.errors.message}
                        </FormErrorMessage>
                      </Box>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              {hasSentEmail ? (
                <Button
                  isDisabled
                  size="lg"
                  variantColor="green"
                  leftIcon="check"
                  type="submit"
                >
                  Sent!
                </Button>
              ) : (
                <Button
                  size="lg"
                  variantColor="blue"
                  leftIcon="email"
                  type="submit"
                  isLoading={props.isSubmitting}
                >
                  Send
                </Button>
              )}
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

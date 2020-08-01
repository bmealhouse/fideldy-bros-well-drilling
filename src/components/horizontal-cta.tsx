import * as React from "react";
import Img from "gatsby-image/withIEPolyfill";
import { Box, Button, Flex, Heading } from "@chakra-ui/core";

export default ({
  position,
  image,
  heading,
  description,
  buttonText,
  ...props
}) => (
  <Box {...props} bg={position === "left" ? "white" : "white"}>
    <Box mx="auto" maxWidth="containers.lg">
      <Flex
        direction={{ base: "column", md: "row" }}
        mx={{ base: 0, sm: 8 }}
        bg="white"
        shadow={{ base: "none", sm: "xl" }}
      >
        <Box
          flex="0 0 50%"
          order={{ md: position === "left" ? 0 : 1 }}
          borderColor="#333"
          borderTopWidth={{ base: 7, sm: 0 }}
        >
          <Img
            fluid={image}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={`${heading} photo`}
            style={{
              height:
                typeof window === "undefined" || // server-side render
                window.matchMedia("(min-width: 48em)").matches // md breakpoint
                  ? 400
                  : 300,
              minWidth: "100%",
            }}
          />
        </Box>
        <Box flex="0 0 50%" px={8} py={6} borderColor="#333" borderTopWidth={7}>
          <Heading as="h2" size="xl" fontWeight={700} letterSpacing="tighter">
            {heading}
          </Heading>
          <Box mt={2} mb={4} letterSpacing="tight">
            {description}
          </Box>
          <Button
            as="a"
            // @ts-ignore "href" is not recognized as a valid prop when using the <Button as="a" /> component
            href="#contact-us"
            variantColor="blue"
            variant="outline"
            rightIcon="chevron-right"
          >
            {buttonText}
          </Button>
        </Box>
      </Flex>
    </Box>
  </Box>
);

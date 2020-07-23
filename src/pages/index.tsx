import * as React from "react";
import { Stack, Text } from "@chakra-ui/core";
import well_drilling from "../assets/well-drilling.jpg";
import well_services from "../assets/well-services.jpg";
import {
  ContactUs,
  Footer,
  Header,
  HorizontalCTA,
  Slogan,
} from "../components";
import "typeface-inter";
import "isomorphic-unfetch";

export default () => (
  <>
    <Header />
    <Slogan />
    <Stack as="main" spacing={20}>
      <HorizontalCTA
        position="left"
        image={well_drilling}
        heading="Well drilling"
        description={
          <>
            <Text>
              You expect Fideldy Bros Well Drilling to drill new water wells,
              install complete water systems, and cabin plumbing systems, but we
              also do so much more!
            </Text>
            <Text mt={2}>Vertical geothermal installs are also available.</Text>
          </>
        }
        buttonText="Contact us about well drilling"
      />
      <HorizontalCTA
        position="right"
        image={well_services}
        heading="Well services"
        description={
          <>
            <Text>
              We repair, sell, and service all pumps! We are licensed to do well
              inspections and water testing. We also seal old wells. Permanently
              sealing an abandoned well protects groundwater quality and public
              health for future generations. We have the skills and equipment to
              seal abandoned wells.
            </Text>
            <Text mt={2}>Need water, give us a call.</Text>
          </>
        }
        buttonText="Contact us about well services"
      />
      <ContactUs />
    </Stack>
    <Footer />
  </>
);

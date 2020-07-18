import * as React from "react";
import { Stack } from "@chakra-ui/core";
import {
  ContactUs,
  Footer,
  Header,
  HorizontalCTA,
  Slogan,
} from "../components";
import well_drilling from "../assets/well-drilling.jpg";
import well_services_repair from "../assets/well-services-repair.jpg";
import "typeface-inter";

export default () => (
  <>
    <Header />
    <Slogan />
    <Stack as="main" spacing={20}>
      <HorizontalCTA
        position="left"
        image={well_drilling}
        heading="Well drilling"
        description="You expect Fideldy Bros Well Drilling to drill new water wells, install complete water systems, and cabin plumbing systems, but we also do so much more!"
        buttonText="Contact us about well drilling"
      />
      <HorizontalCTA
        position="right"
        image={well_services_repair}
        heading="Well services"
        description="Permanently sealing an abandoned well protects groundwater quality and public health for future generations. We have the skills and equipment to seal abandoned wells. We also repair, sell, and service pumps! We are licensed to do well inspections and water testing. Vertical geothermal installs are also available."
        buttonText="Contact us about well services"
      />
      <ContactUs />
    </Stack>
    <Footer />
  </>
);

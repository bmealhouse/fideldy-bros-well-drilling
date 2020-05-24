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
import geothermal from "../assets/geothermal.jpg";
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
        description="Permanently sealing an abandoned well protects groundwater quality and public health for future generations. We have the skills and equipment to seal abandoned wells. We also repair, sell, and service pumps! We are licensed to do well inspections and water testing."
        buttonText="Contact us about well services"
      />
      <HorizontalCTA
        position="left"
        image={geothermal}
        heading="Geothermal"
        description="We realize that the proper sizing, design, and installation are critical to vertical geothermal heat exchange system performance and seasonal loop field recovery. Our training and experience provides your home with this environmentally friendly heating system."
        buttonText="Contact us about geothermal"
      />
      <ContactUs />
    </Stack>
    <Footer />
  </>
);

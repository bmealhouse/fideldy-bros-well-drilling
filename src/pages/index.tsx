import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Stack, Text } from "@chakra-ui/core";
import {
  ContactUs,
  Footer,
  Header,
  HorizontalCTA,
  Slogan,
} from "../components";
import "typeface-inter";
import "isomorphic-unfetch";

export default ({ data }) => (
  <>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Header />
    <Slogan />
    <Stack as="main" spacing={20}>
      <HorizontalCTA
        position="left"
        image={data.wellDrillingImage.childImageSharp.fluid}
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
        image={data.wellServicesImage.childImageSharp.fluid}
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

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    wellDrillingImage: file(relativePath: { eq: "well-drilling.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wellServicesImage: file(relativePath: { eq: "well-services.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

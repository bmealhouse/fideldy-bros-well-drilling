import { theme } from "@chakra-ui/core";

// console.log(JSON.stringify(theme, null, 2));

export default {
  ...theme,
  colors: {
    ...theme.colors,
    dark: "#181a1b",
  },
  fonts: {
    ...theme.fonts,
    heading: `Inter, ${theme.fonts.heading}`,
    body: `Inter, ${theme.fonts.body}`,
  },
};

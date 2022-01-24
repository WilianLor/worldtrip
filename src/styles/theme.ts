import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "#FFBA08",
      "50": "rgba(255, 186, 8, .5)",
    },
    black: {
      "900": "#000000",
    },
    gray: {
      "700": "#47585B",
      "500": "#999999",
      "50": "rgba(153, 153, 153, 0.5)",
    },
    white: {
      "500": "#DADADA",
      "200": "#F5F8FA",
      "100": "#FFF",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.200",
        color: "gray.700",
      },
    },
  },
});

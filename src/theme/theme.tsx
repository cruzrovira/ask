import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {
      "html,body": {
        bg: "gray.200",
        fontsize: "16px",
        width: "100%",
        minH: "100vh",
      },
    },
  },
})

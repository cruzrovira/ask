import { extendTheme } from "@chakra-ui/react"
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
  styles: {
    global: (props: GlobalStyleProps) => ({
      "html,body": {
        bg: mode("gray.200", "gray.900")(props),
        fontsize: "16px",
        width: "100%",
        minH: "100vh",
        color: "gray.700",
      },
    }),
  },
  components: {},
})

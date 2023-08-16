import { theme } from "@/theme"
import { ChakraBaseProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import NavigationApp from "./routes/navigationApp.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <NavigationApp />
    </ChakraBaseProvider>
  </React.StrictMode>,
)

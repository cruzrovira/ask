import { Box } from "@chakra-ui/react"
import React from "react"
type props = {
  children: React.ReactNode
}
const Layout: React.FC<props> = ({ children }) => {
  return (
    <Box
      w={"100%"}
      minH={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        bg={"gray.100"}
        w={{ base: "100%", md: "520px" }}
        minH={{ base: "100vh", md: "90vh" }}
        boxShadow={{ base: "", md: "md" }}
        borderRadius={{ base: "", md: "md" }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout

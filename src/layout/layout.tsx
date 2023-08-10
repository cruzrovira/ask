import { Box, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import Menu from "../components/menu"
type props = {
  children: React.ReactNode
}
const Layout: React.FC<props> = ({ children }) => {
  const bgcolor = useColorModeValue("gray.100", "gray.700")
  return (
    <Box w={"100%"} minH={"100vh"} display={"flex"} justifyContent={"center"}>
      <Box
        bg={bgcolor}
        w={{ base: "100%", md: "520px" }}
        minH={{ base: "100vh", md: "90vh" }}
        mt={{ base: "0", md: "20px" }}
        mb={{ base: "0", md: "20px" }}
        boxShadow={{ base: "", md: "md" }}
        borderRadius={{ base: "", md: "md" }}
      >
        <Menu />
        {children}
      </Box>
    </Box>
  )
}

export default Layout

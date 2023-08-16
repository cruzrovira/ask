import { APP_CONST } from "@/const/configurationsCont"
import { ArrowBackIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Link, Text, useColorMode } from "@chakra-ui/react"
import React from "react"
import { Link as ReactRouterLink, useLocation } from "react-router-dom"
type props = {}
const Menu: React.FC<props> = ({}) => {
  const location = useLocation()
  const { toggleColorMode, colorMode } = useColorMode()
  const handleColorMode = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault()
    toggleColorMode()
  }
  return (
    <Box
      bg={"teal"}
      py={2}
      px={4}
      display={"flex"}
      justifyContent={"center"}
      borderTopRadius={{ base: "", md: "md" }}
    >
      {location.pathname !== APP_CONST.URL.HOME && (
        <Link
          as={ReactRouterLink}
          to="/"
          position={"relative"}
          marginRight={"auto"}
        >
          <Text color={"white"}>
            <ArrowBackIcon />
            <Text ml={2} as="span">
              Go back
            </Text>
          </Text>
        </Link>
      )}

      <Link onClick={handleColorMode} marginLeft={"auto"} position={"relative"}>
        {colorMode === "light" ? (
          <MoonIcon color={"white"} />
        ) : (
          <SunIcon color={"white"} />
        )}
      </Link>
    </Box>
  )
}

export default Menu

import { Stack, Text } from "@chakra-ui/react"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../layout/layout"
type props = {}
const NoMatchPage: React.FC<props> = ({}) => {
  return (
    <Layout>
      <Helmet>
        <title>Ask - 404</title>
      </Helmet>
      <Stack direction={"column"} p={4} spacing={1} alignItems={"center"}>
        <Text fontSize={"3xl"} fontWeight={"bold"} mt={8}>
          ¯\(°_o)/¯
        </Text>
        <Text fontSize={"2xl"}>404</Text>
      </Stack>
    </Layout>
  )
}

export default NoMatchPage

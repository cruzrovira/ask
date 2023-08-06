import { GridItem, Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"
type props = {
  question: string
}
const Questions: React.FC<props> = ({ question }) => {
  return (
    <GridItem>
      <Stack spacing={0} direction={"column"}>
        <Heading
          as="p"
          textAlign={"center"}
          bg={"teal"}
          color={"white"}
          borderTopRadius={"md"}
          fontSize={14}
          py={2}
        >
          Question
        </Heading>
        <Text
          w="full"
          bg={"white"}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          placeholder="¿What is your question?"
          p={2}
        >
          {question}
        </Text>
      </Stack>
    </GridItem>
  )
}

export default Questions

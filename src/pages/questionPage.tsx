import { Button, Center, Spinner, Stack, useToast } from "@chakra-ui/react"

import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import Questions from "../components/questions"
import { useQuestion } from "../hooks/useQuestion"
import Layout from "../layout/layout"

type props = {}
const QuestionPage: React.FC<props> = ({}) => {
  const { id } = useParams()
  const toast = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const { question, getQuestionsById } = useQuestion()

  useEffect(() => {
    setLoading(true)
    id &&
      getQuestionsById({ id: parseInt(id) }).then(() => {
        setLoading(false)
      })
  }, [])

  const copyUrl = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    return toast({
      title: "Copied to url clipboard",
      description: "You can share this link with your friends",
      colorScheme: "teal",
      status: "success",
      duration: 1000,
      isClosable: true,
    })
  }
  return (
    <Layout>
      <Helmet>
        <title>Ask - Question</title>
      </Helmet>
      <Stack direction={"column"} p={4} spacing={2}>
        {loading ? (
          <Center>
            <Spinner size={"xl"} color="teal" />
          </Center>
        ) : (
          <>
            <Questions question={question.question} />
            <Button
              bg={"teal"}
              color={"white"}
              _hover={{ bg: "teal.500" }}
              w={"full"}
              onClick={copyUrl}
            >
              Copy URL
            </Button>
          </>
        )}
      </Stack>
    </Layout>
  )
}

export default QuestionPage

import { ArrowBackIcon } from "@chakra-ui/icons"
import { Center, Link, Spinner, Stack, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Link as ReactRouterLink, useParams } from "react-router-dom"
import Questions from "../components/questions"
import { useQuestion } from "../hooks/useQuestion"
import Layout from "../layout/layout"
type props = {}
const QuestionPage: React.FC<props> = ({}) => {
  const { id } = useParams()
  const [loading, setLoading] = useState<boolean>(false)
  const { question, getQuestionsById } = useQuestion()
  useEffect(() => {
    setLoading(true)
    id &&
      getQuestionsById({ id: parseInt(id) }).then(() => {
        setLoading(false)
      })
  }, [])
  return (
    <Layout>
      <Stack direction={"column"} p={4} spacing={2}>
        <Link as={ReactRouterLink} to="/">
          <Text>
            <ArrowBackIcon />
            <Text ml={2} as="span">
              Go back
            </Text>
          </Text>
        </Link>
        {loading ? (
          <Center>
            <Spinner size={"xl"} color="teal" />
          </Center>
        ) : (
          <Questions question={question.question} />
        )}
      </Stack>
    </Layout>
  )
}

export default QuestionPage

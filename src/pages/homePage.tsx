import { Center, Divider, Spinner, Stack } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import ListQuestions from "../components/listQuestions"
import QuestionsForm from "../components/questionsForm"
import { useQuestion } from "../hooks/useQuestion"
import Layout from "../layout/layout"

type props = {}

const HomePage: React.FC<props> = ({}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { questions, getQuestions } = useQuestion()

  useEffect(() => {
    setLoading(true)
    getQuestions().then(() => {
      setLoading(false)
    })
  }, [])

  return (
    <Layout>
      <Stack direction={"column"} p={4} spacing={4}>
        <QuestionsForm />
        <Divider borderColor={"teal"} opacity={"0.2"} />
        {loading ? (
          <Center>
            <Spinner size={"xl"} color="teal" />
          </Center>
        ) : (
          <ListQuestions questions={questions} />
        )}
      </Stack>
    </Layout>
  )
}

export default HomePage

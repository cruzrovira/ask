import { Button, Heading, Input, Stack, useToast } from "@chakra-ui/react"
import React from "react"
import { useQuestion } from "../hooks/useQuestion"
type props = {}
const QuestionsForm: React.FC<props> = ({}) => {
  const { question, setQuestion, addQuestion } = useQuestion()
  const toast = useToast()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (question.question === "") {
      setQuestion(pre => ({ ...pre, question: "" }))
      return toast({
        title: "add question",
        description: "Your question can't be empty",
        status: "error",
        duration: 1000,
        isClosable: true,
      })
    }
    if (question.question.length < 8) {
      setQuestion(pre => ({ ...pre, question: "" }))
      return toast({
        title: "add question",
        description: "Your question can't be less than 8 characters",
        status: "error",
        duration: 1000,
        isClosable: true,
      })
    }
    if (question.question.length > 150) {
      setQuestion(pre => ({ ...pre, question: "" }))
      return toast({
        title: "add question",
        description: "Your question can't be more than 150 characters",
        status: "error",
        duration: 1000,
        isClosable: true,
      })
    }

    addQuestion({ question: question.question }).then(data => {
      if (data.status === 201) {
        setQuestion(pre => ({ ...pre, question: "" }))
        toast({
          title: "add question",
          description: "Your question has been added",
          status: "success",
          duration: 1000,
          isClosable: true,
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={"column"}>
        <Stack spacing={0}>
          <Heading
            as="h2"
            textAlign={"center"}
            bg={"teal"}
            color={"white"}
            borderTopRadius={"md"}
          >
            Ask a question
          </Heading>
          <Input
            w="full"
            bg={"white"}
            name="question"
            borderTopLeftRadius={0}
            borderTopRightRadius={0}
            value={question.question}
            maxLength={150}
            placeholder="¿What is your question?"
            onChange={e =>
              setQuestion(pre => ({ ...pre, question: e.target.value }))
            }
          />
        </Stack>

        <Button w={"full"} colorScheme="teal" type="submit">
          Send
        </Button>
      </Stack>
    </form>
  )
}

export default QuestionsForm

import { APP_CONST } from "@/const/configurationsCont"
import { useQuestion } from "@/hooks/useQuestion"
import { Button, Heading, Input, Stack, useToast } from "@chakra-ui/react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
type props = {}
const QuestionsForm: React.FC<props> = ({}) => {
  const navigate = useNavigate()
  const [question, setQuestion] = useState<string>("")
  const { addQuestion } = useQuestion()
  const toast = useToast()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (question === "") {
      setQuestion("")
      return toast({
        title: "error question",
        description: "Your question can't be empty",
        status: "error",
        duration: 1000,
        isClosable: true,
      })
    }
    if (question.length < 8) {
      setQuestion("")
      return toast({
        title: "error question",
        description: "Your question can't be less than 8 characters",
        status: "error",
        duration: 1000,
        isClosable: true,
      })
    }
    if (question.length > 150) {
      setQuestion("")
      return toast({
        title: "error question",
        description: "Your question can't be more than 150 characters",
        status: "error",
        duration: 1000,
        isClosable: true,
      })
    }

    addQuestion({ question: question }).then(data => {
      if (data.status === 201) {
        setQuestion("")
        navigate(`${APP_CONST.URL.QUESTION}/${data.data.id}`)
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
            value={question}
            maxLength={150}
            _placeholder={{ color: "#888" }}
            placeholder="¿What is your question?"
            onChange={e => setQuestion(e.target.value)}
          />
        </Stack>

        <Button
          w={"full"}
          bg={"teal"}
          color={"white"}
          _hover={{ bg: "teal.500" }}
          type="submit"
        >
          Send
        </Button>
      </Stack>
    </form>
  )
}

export default QuestionsForm

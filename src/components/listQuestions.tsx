import Questions from "@/components/questions"
import { questionType } from "@/types/questionType"
import { Grid, Link } from "@chakra-ui/react"
import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"

type props = {
  questions: questionType[]
}

const ListQuestions: React.FC<props> = ({ questions }) => {
  return (
    <Grid templateColumns={"repeat(auto-fill,minmax(200px,1fr))"} gap={4}>
      {questions.map(question => (
        <Link
          as={ReactRouterLink}
          to={`/question/${question.id}`}
          textDecoration="none !important"
          _hover={{ filter: "brightness(0.9)" }}
          key={question.id}
        >
          <Questions question={question.question} />
        </Link>
      ))}
    </Grid>
  )
}

export default ListQuestions

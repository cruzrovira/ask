import { useContext } from "react"
import { questionContext } from "../context/questionContext"
import { getAsk, getAskById, setAsk } from "../service/supabase"

export const useQuestion = () => {
  const context = useContext(questionContext)
  if (context === undefined) {
    throw new Error("useQuestion must be used within a QuestionContextProvider")
  }
  const { question, questions, setQuestion, setQuestions } = context

  const getQuestions = () => {
    return getAsk().then(res => {
      setQuestions(res)
    })
  }

  const getQuestionsById = ({ id }: { id: number }) => {
    return getAskById({ id }).then(data => {
      setQuestion(() => data)
      return data
    })
  }
  const addQuestion = ({ question }: { question: string }) => {
    return setAsk({ question: question.toString() }).then(data => {
      getQuestions()
      return data
    })
  }

  return {
    question,
    questions,
    setQuestion,
    getQuestionsById,
    getQuestions,
    addQuestion,
  }
}

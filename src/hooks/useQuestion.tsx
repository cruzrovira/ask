import { useContext } from "react"
import { questionContext } from "../context/questionContext"
import { getAsk, getAskById, setAsk } from "../service/supabase"
import { questionType } from "../types/questionType"

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
      return { ...data, data: data.data as questionType }
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

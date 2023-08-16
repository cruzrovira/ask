import { questionType } from "@/types/questionType"
import React, { createContext, useState } from "react"

export const questionContext = createContext<{
  question: questionType
  questions: questionType[]
  setQuestions: React.Dispatch<React.SetStateAction<questionType[]>>
  setQuestion: React.Dispatch<React.SetStateAction<questionType>>
}>({
  question: { id: 0, question: "" },
  questions: [],
  setQuestions: () => {},
  setQuestion: () => {},
})

export const QuestionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [questions, setQuestions] = useState<questionType[]>([])
  const [question, setQuestion] = useState<questionType>({
    id: 0,
    question: "",
  })
  return (
    <questionContext.Provider
      value={{
        questions: questions,
        setQuestions: setQuestions,
        question: question,
        setQuestion: setQuestion,
      }}
    >
      {children}
    </questionContext.Provider>
  )
}

import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { APP_CONST } from "@/const/configurationsCont"
import { QuestionContextProvider } from "@/context/questionContext"
import { default as HomePage } from "@/pages/homePage"
import NoMatchPage from "@/pages/noMatchPage"
import QuestionPage from "@/pages/questionPage"

type props = {}
const NavigationApp: React.FC<props> = ({}) => {
  return (
    <BrowserRouter>
      <QuestionContextProvider>
        <Routes>
          <Route path={APP_CONST.URL.HOME} element={<HomePage />} />
          <Route
            path={`${APP_CONST.URL.QUESTION}/:id`}
            element={<QuestionPage />}
          />
          <Route path={APP_CONST.URL.NOT_FOUND} element={<NoMatchPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </QuestionContextProvider>
    </BrowserRouter>
  )
}

export default NavigationApp

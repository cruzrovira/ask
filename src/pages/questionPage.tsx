import { Button, Center, Spinner, Stack, useToast } from "@chakra-ui/react"
import html2canvas from "html2canvas"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { redirect, useParams } from "react-router-dom"
import Questions from "../components/questions"
import { APP_CONST } from "../const/configurationsCont"
import { useQuestion } from "../hooks/useQuestion"
import Layout from "../layout/layout"
type props = {}
const QuestionPage: React.FC<props> = ({}) => {
  const { id } = useParams()

  // if (!id) {
  //   redirect(APP_CONST.URL.NOT_FOUND)
  // }
  // if (id && !isNaN(parseInt(id))) {
  //   redirect(APP_CONST.URL.NOT_FOUND)
  // }

  const toast = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const { question, getQuestionsById } = useQuestion()
  const divRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLoading(true)
    id &&
      getQuestionsById({ id: parseInt(id) }).then(data => {
        if (data.status !== 200) {
          redirect(APP_CONST.URL.NOT_FOUND)
          return
        }
        setLoading(false)
      })
  }, [])

  const copyUrl = () => {
    const div = divRef.current
    div?.querySelector("button")?.style.setProperty("visibility", "hidden")
    if (div) {
      html2canvas(div).then(canva => {
        canva.toBlob(blob => {
          if (blob) {
            const item = new ClipboardItem({ "image/png": blob })
            navigator.clipboard.write([item])
          }
        })
      })
    }
    div?.querySelector("button")?.style.setProperty("visibility", "initial")
    return toast({
      title: "Copied to image clipboard",
      description: "you can share this image with your friends",
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
      <Stack direction={"column"} p={4} spacing={2} ref={divRef}>
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
              Copy to Image
            </Button>
          </>
        )}
      </Stack>
    </Layout>
  )
}

export default QuestionPage

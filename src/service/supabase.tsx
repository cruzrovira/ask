import { createClient } from "@supabase/supabase-js"
import { APP_CONST } from "../const/configurationsCont"
import { questionType } from "../types/questionType"

const supabase = createClient(APP_CONST.SUPABASE.URL, APP_CONST.SUPABASE.key)

export const getAsk = async (): Promise<questionType[]> => {
  return await supabase
    .from("ask")
    .select()
    .order("id", { ascending: false })
    .then(({ data }) => data as questionType[])
}

export const getAskById = async ({
  id,
}: {
  id: Number
}): Promise<questionType> => {
  let { data } = await supabase.from("ask").select("*").eq("id", id).single()
  return data as questionType
}

export const setAsk = async ({ question }: { question: string }) => {
  return await supabase
    .from("ask")
    .insert({ question: question })
    .select()
    .single()
}

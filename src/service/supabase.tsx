import { createClient } from "@supabase/supabase-js"
import { questionType } from "../types/questionType"

const supabaseUrl = "https://acxfaonngdzmkowxagly.supabase.co"

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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

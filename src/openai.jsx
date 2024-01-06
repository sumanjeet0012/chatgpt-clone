import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY,dangerouslyAllowBrowser: true});


export async function sendMsgToOpenAI(message) {

  const res = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  return res.data.choices[0].text;
}
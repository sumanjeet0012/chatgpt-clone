import React from 'react'
const { GoogleGenerativeAI } = require("@google/generative-ai");



const SendMsgToOpenAI = async (prompt) => {
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_API_KEY);
  console.log("genAI",genAI);
  console.log("api key",process.env.REACT_APP_OPENAI_API_KEY);

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  // const prompt = "Write a story about a magic backpack."
  console.log("prompt",prompt);

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;

}

export default SendMsgToOpenAI
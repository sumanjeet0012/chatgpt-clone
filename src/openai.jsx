const { GoogleGenerativeAI } = require("@google/generative-ai");

const SendMsgToOpenAI = async (prompt) => {
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;

}

export default SendMsgToOpenAI
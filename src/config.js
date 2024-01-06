import {config} from "dotenv";
config();
console.log(process.env.OPENAI_API_KEY);
const apiKey = process.env.OPENAI_API_KEY;
export default apiKey;
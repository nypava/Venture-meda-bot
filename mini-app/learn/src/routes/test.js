import dotenv from "dotenv";

dotenv.config()

import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(process.env)
console.log(process.env.gemini_api_key )

const genAI = new GoogleGenerativeAI(process.env.gemini_api_key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "how are ou";

const result = await model.generateContent([prompt]);
console.log(result.response.text());

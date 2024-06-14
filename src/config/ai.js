import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyCgEyseJqA5WyJfHnz39I9wjTAy73YienA";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default run;

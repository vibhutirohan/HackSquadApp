const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const path = require('path')
const app = express();

//Open AI configuration
const openAi = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPEN_AI_API_KEY,
    })
  );
const cors = require("cors");
const { connection } = require("./config/db");
const { InterviewModel } = require("./models/interviewModel");

app.use(cors())
app.use(express.json());
let conversationHistory = [];
const initialPrompts = [
    {
      role: "system",
      content:"You are an interviewer. Ask 5 easy relevant questions about nodejs to the student, one at a time and keep the conversation going. If the student is unable to answer, move on to the next question without providing an explanation. After asking all the questions, provide feedback to the student regarding areas of improvement based on their answers."
    },
    {
      role: "assistant",
      content: "Great, let's start the interview."
    }
  ];

  // Add initial prompts to the conversation history
conversationHistory.push(...initialPrompts)


app.post("/startprompt",async(req,res)=>{
    const {prompt} = req.body;
    conversationHistory.push({ role: "user", content: prompt })
    const response = await openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversationHistory,
        max_tokens: 1000
      });

      const reply = response.data.choices[0].message.content.trim()

      if (reply) {
        if(conversationHistory.length===13){
          conversationHistory.push({ role: "assistant", content: reply });
          let feedback = conversationHistory[13].content;
          feedback = feedback.split("\n")[1]
          console.log(feedback)
          let rating = response.data.choices[0].rating;
          console.log(rating)
           const newInterview = new InterviewModel({studentId:"1",role:"Node",conversation:conversationHistory,feedback:feedback,rating:rating})
           await newInterview.save()
           return res.status(200).send({status:200,res:reply,msg:"interview is done"})
        }
        else{
          conversationHistory.push({ role: "assistant", content: reply });
          return res.status(200).send({status:200,res:reply,msg:"ongoing"})
        } 
      }
      return res.status(500).send({status:500,msg:"Try again after some time"})
    
})




//server part...//
app.listen(4500,async()=>{
    try {
       await connection
      console.log("Connected to DB")
    } catch (error) {
      console.log(error.message)
    }
    console.log("Server is running on port 4500")
      
  })
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
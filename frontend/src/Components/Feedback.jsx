import React, { useEffect, useState } from 'react';

const Feedback = () => {
  // Retrieve data from localStorage and parse it
 
  const inputString = JSON.parse(localStorage.getItem("feedback") || "[]");

  const keyValueRegex = /(\w+):\s*([\w\s"'.]+),/g;
  
  // Initialize an empty object
  const result = {};
  
  // Extract and populate key-value pairs
  let match;
  while ((match = keyValueRegex.exec(inputString)) !== null) {
    const key = match[1];
    let value = match[2].trim();
  
    // Convert "None" to null
    if (value === "None") {
      value = null;
    } else if (value.startsWith('"') && value.endsWith('"')) {
      // If the value is wrapped in double quotes, remove them
      value = value.slice(1, -1);
    }
  
    result[key] = value;
  }
  
  console.log(result);


  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Feedback</h1>
    
        <div className="border p-2 mb-4 " >
          <div > <span className="font-bold">Score:</span> {result.score}</div>
          <div ><span className="font-bold">Feedback</span>: {result.feedback}</div>
          
        </div>
      
    </div>
  );
};

export default Feedback;
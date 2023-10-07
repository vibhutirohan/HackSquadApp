import React from 'react';

const Feedback = () => {
  // Retrieve data from localStorage and parse it
  const data = JSON.parse(localStorage.getItem("feedback"))
   const inputString=data.data
console.log(inputString);
  // const inputString ="\n    [\n        score: 8,\n        feedback: \"The answer provided is answering the question correctly.\",\n        extra: None,\n        error: None\n    ]";

//"\n    [\n        score: 8,\n        feedback: \"The answer provided is answering the question correctly.\",\n        extra: None,\n        error: None\n    ]"

  // const keyValueRegex = /(\w+):\s*([\w\s"'.]+),/g;
  
  // // Initialize an empty object
  // const result = {};
  
  // // Extract and populate key-value pairs
  // let match;
  // while ((match = keyValueRegex.exec(inputString)) !== null) {
  //   const key = match[1];
  //   let value = match[2].trim();
  
  //   // Convert "None" to null
  //   if (value === "None") {
  //     value = null;
  //   } else if (value.startsWith('"') && value.endsWith('"')) {
  //     // If the value is wrapped in double quotes, remove them
  //     value = value.slice(1, -1);
  //   }
  
  //   result[key] = value;
  // }
  
  // console.log(result);





  // const inputString = "\nScore: 9\nFeedback: The answers given are comprehensive and demonstrate a good understanding of React hooks and component debugging.";

  // Split the input string by the "\n" character
  const parts = inputString.split('\n');
  
  // Initialize an empty object
  const result = {};
  
  // Loop through the parts and extract key-value pairs
  for (const part of parts) {
    // Skip empty parts
    if (part.trim() === "") continue;
  
    // Split each part by ":"
    const [key, value] = part.split(':');
  
    // Remove leading and trailing whitespace from key and value
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();
  
    // Assign the key-value pair to the result object
    result[trimmedKey] = trimmedValue;
  }
  
  // Display the resulting object
  console.log(result);

  return (
    <div className="items-center mt-[-100px] flex h-screen border-2 border-black justify-center">
      <div>
      <div>
      <h1 className="text-2xl text-custom-teal mb-10 font-bold">Feedback</h1>
      </div>
        <div className="border p-2 mb-4 " >
        <div > {data.data}</div>
          {/* <div > <span className="font-bold">Score:</span> {result?.Score}</div>
          <div ><span className="font-bold">Feedback</span>: {result.Feedback}</div> */}

        </div>
      </div>
    </div>
  );
};

export default Feedback;
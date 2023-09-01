import React,{useState,useEffect} from 'react'

const Dashboard = () => {
    const [dataArray, setDataArray] = useState<string[]>([]);
    useEffect(() => {
        const storedData = localStorage.getItem('questions');
        if (storedData) {
          setDataArray(JSON.parse(storedData));
        }
      }, []);
      console.log(`dataArray-->`,dataArray);
      
     
  return (
    <div>
      
      <ul>
        {dataArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
     
    </div>
  )
}

export default Dashboard
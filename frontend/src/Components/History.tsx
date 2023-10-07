
import {useDispatch,useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { RootState } from '../redux/store'
const History = () => {
  
    const user=useSelector((store:RootState)=>store.authReducer.user)
    console.log(user._id);


    const [data, setData] = useState<any>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://hacksquad-api.onrender.com/history/${user._id}`);
          if (response.ok) {
            const jsonData = await response.json();
            setData(jsonData);
            
          } else {
            console.error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);


    console.log("hist",data);
  return (
    <div>
    {/* Render your component content here */}
    {data?.length > 0 ? (
      <div>
        <h1 className='font-bold text-center mb-2 mt-2 text-2xl text-custom-teal'>History of {user.name}'s Interview</h1>
        <ul>
          {data.map((item: any, index: number) => (
            <div className='mb-2  container w-10/12 m-auto border-2 border-custom-teal p-2 '>
 <li key={index}><span className='mr-2 ml-2 font-semibold mb-6'>Interview {index+1}</span>:{item.body}</li>
 <li><span className='mr-2 ml-2  font-semibold' >Date : </span>{item.date}</li>
            </div>
           
            
          ))}
        </ul>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default History
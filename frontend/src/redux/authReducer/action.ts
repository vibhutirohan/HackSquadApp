import { Dispatch } from "redux";
import { User, authAction } from "../../contraints/Type";
import axios from 'axios'
import { LOGIN_REQUEST } from "../actionType";

export const loginSuccess=(user:any)=>(dispatch:any)=>{
     dispatch({type:LOGIN_REQUEST})
     axios.post('https://hacksquad-api.onrender.com/user/register',{
        method:'POST'
     })
}

// try {
//     dispatch({type:LOGIN_REQUEST})
//     try {
//       const res = await axios.post(`${baseURL}/users/login`,user);
//       console.log(res)
//       dispatch({type:LOGIN_SUCCESS, payload:res?.data})

//       return res?.data?.accessToken;
//     } catch (error) {
//       dispatch({type:LOGIN_FAILURE})
//     }
//   } catch (error) {
//     console.log(error)
//   }
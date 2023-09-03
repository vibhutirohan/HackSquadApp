import { Dispatch } from "redux";
import { User } from "../../contraints/Type";
import axios from 'axios'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";


export const loginSuccess= (user:User)=> (dispatch:Dispatch)=>{
     dispatch({type:LOGIN_REQUEST})
     axios.post('https://hacksquad-api.onrender.com/user/login',user)
     .then((res)=>{
        console.log(res)
        dispatch({type:LOGIN_SUCCESS, payload:res?.data})
     })
     .catch((error)=>{
        dispatch({type:LOGIN_FAILURE})
        console.log(error)
     })
}




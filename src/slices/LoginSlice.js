import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState= {
   loading:false,
   error: '',
   users: {},
}

 const loginSlice  = createSlice({
  name : "loginSlice",
  initialState,
  reducers : {
     createUser : (state,action) =>{
     return {
      users :action.payload
     }
     },
     logoutUser: (state,action)=>{
      return {
         users :[]
        }
     }

  },
  
 })

// Action creators are generated for each case reducer function

export const {createUser, logoutUser} =  loginSlice.actions;

export default loginSlice.reducer


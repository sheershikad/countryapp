// here i will make all api calls
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"

//show all countries
//2 arguments in createAsyncThunk ---  string(action type) and payload creator function( asynchrnous function)
//in async there will be two args---- arg and thunkapi
export const showAllCountries= createAsyncThunk("countries/showAllCountries" , async (_,thunkAPI)=>{
  try{
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    // console.log(response.data);
    return response.data;
    
  }
  catch(err){
    const message=(err.response && err.response.data) || err.message; 
    //rejectwithvalue sends err mesge as a payload
  return thunkAPI.rejectWithValue(message);
  }
}
);

//search by cioc code
export const searchByCode = createAsyncThunk("countries/searchByCode" , async (code,thunkAPI)=>{
  try{
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    return response.data;
  }
  catch(err){
    const message=(err.response && err.response.data) || err.message; 
    //rejectwithvalue sends err mesge as a payload
  return thunkAPI.rejectWithValue(message);
  }

})
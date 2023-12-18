import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/axios';
import {message} from 'antd'

export const GetSearchData=createAsyncThunk("wiki/search",async(data)=>{
  try {
    console.log("here",data)
    const response = await api.get(`/search/${data}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    message.error("bad request");
  }
})



export const GetPageContent= createAsyncThunk("wiki/content",async(pageId)=>{
  try {
    const response = await api.get(`/read/${pageId}`)
    console.log(response.data);
    return response.data;
    
  } catch (error) {
    console.log(error);
    message.error("bad request");
  }
  
});


const initialState= {searchData:null, pageContent:null,loading:false}
const wikiSlice = createSlice({
  name: 'wikiSlice',
  initialState ,
  reducers:{
    clearData:(state)=>{
      state.searchData=null;
      state.pageContent=null
    }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(GetSearchData.pending,(state)=>{
        state.loading=true;
      })
      .addCase(GetSearchData.fulfilled,(state,action)=>{
        state.loading=false;
        console.log(action.payload)
        state.searchData=action.payload.results
      })
      .addCase(GetSearchData.rejected,(state,action)=>{
        state.loading=false;
        
      })
      .addCase(GetPageContent.pending,(state)=>{
        state.loading=true;
      })
      .addCase(GetPageContent.fulfilled,(state,action)=>{
        state.loading=false;
        console.log(action.payload)
        state.pageContent=action.payload;
      })
      .addCase(GetPageContent.rejected,(state,action)=>{
        state.loading=false;
      })
  }
  
});

export const {clearData } = wikiSlice.actions;

export default wikiSlice.reducer;
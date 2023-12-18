import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";
import { message } from "antd";
import { getAccessToken, setAccessToken, setRefreshToken } from "../utils/token";

const accesstoken=getAccessToken();

export const adminLogin = createAsyncThunk('admin/login', async (data) => {
    try {

        console.log("here")
        await api.post(`/admin/login/${data}`).then((response) => {
            console.log(response.data);
            setAccessToken(response.data.accessToken);
            setRefreshToken(response.data.refreshToken);

             return response.data;
        }).catch((error) => {
            console.log(error)
            message.error(error.response.data.message);
            throw error;
        })

    } catch (error) {
        console.log(error);
        message.error(error.response.data.message);
        throw error;

    }

})

export const chartDataApi =createAsyncThunk("chart/admin",async()=>{
    try {
        const response= await api.get('/admin/dashboard');
    console.log(response.data);
    return response.data;
        
    } catch (error) {
        console.log(error);
        throw error
    }
    
})

export const logOut=()=>{
    initialState.user=false;
    if (localStorage.getItem('accessToken')) {
        localStorage.removeItem('accessToken');
    }
    if (localStorage.getItem('refreshToken')) {
        localStorage.removeItem('refreshToken');
    }
}


const initialState = {user: false , loading: false,chartData:null,accessToken:null }
const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers: {
        adminLogout: (state) => {
            state.user = false;
            state.accessToken=null;
            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(adminLogin.fulfilled, (state,action) => {
                state.loading = false;
                state.user = true;
                state.accessToken=action.payload;

            })
            .addCase(adminLogin.rejected, (state) => {
                state.loading = false
               
            })
            .addCase(chartDataApi.pending, (state) => {
                state.loading = true
            })
            .addCase(chartDataApi.fulfilled, (state,action) => {
                state.loading = false;
                state.chartData=action.payload;

            })
            .addCase(chartDataApi.rejected, (state) => {
                state.loading = false;
                
            })
    }


})
export const { adminLogout } = adminSlice.actions;
export default adminSlice.reducer

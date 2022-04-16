import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = '26677654-7386bfad98ff454291817df20'
const pageNum = parseInt((Math.random() * 10) + 1);

export const getVideosApi = createAsyncThunk('videos/add', async(term) => {
    const res = await axios(
        `https://pixabay.com/api/videos/?key=${apiKey}&q=${term}&pretty=true&page=${pageNum}`
    );
    return res.data;
})

const VideoSlice = createSlice({
    name: 'videoSlice',
    initialState: {
        pageNum,
        loading: null,
        error: null,
        data: null,
    },
    extraReducers: {
        [getVideosApi.pending]: (state) => {
            state.loading = true;
            state.data = null;
            state.error = false;
        },
        [getVideosApi.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload;
            state.error = false;
        },
        [getVideosApi.rejected]: (state) => {
            state.loading = false;
            state.data = null;
            state.error = true;
        }
    }
});

export default VideoSlice.reducer;
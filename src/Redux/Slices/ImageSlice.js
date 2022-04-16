import axios from "axios";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const apiKey = '26677654-7386bfad98ff454291817df20'
const pageNum = parseInt((Math.random() * 10) + 1);

export const getImagesApi =  createAsyncThunk('images/add', async(term) => {
    const res = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true&page=${pageNum}`
        )
    return res.data;
});

const ImageSlice = createSlice({
    name: 'imageSlice',
    initialState: {
        pageNum,
        loading: null,
        error: null,
        data: null,
    },
    extraReducers: {
        [getImagesApi.pending]: (state) => {
            state.loading = true;
            state.data = null;
            state.error = false;
        },
        [getImagesApi.fulfilled] : (state, {payload}) => {
            state.loading = false;
            state.error = false;
            state.data = payload;
        },
        [getImagesApi.rejected]: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});

export default ImageSlice.reducer
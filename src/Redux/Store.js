import { configureStore } from "@reduxjs/toolkit";
import ImageSlice from "./Slices/ImageSlice";
import VideoSlice from "./Slices/VideoSlice";

const store = configureStore({
    reducer: {
        imageState: ImageSlice,
        videoState: VideoSlice
    }
})

export default store
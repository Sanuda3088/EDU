import { configureStore } from "@reduxjs/toolkit";
import NumberSliceReducer from "./reducers/NumberSlice";
import LectureNavigationSliceReducer from "./reducers/LectureNavigationSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        numberSlice:NumberSliceReducer,
        lectureNavigationSlice:LectureNavigationSliceReducer

    }
})

export default store
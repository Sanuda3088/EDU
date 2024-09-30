import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number:0,
    isSetupDetails:false,
    isClickedAddResult:true,
    isClickedApprovalPendingResults:false,
    isclickedViewResult:false,
    isClickedHistory:false,
}
const lectureNavigationSlice = createSlice({
    name:"lectureNavaigations",
    initialState,
    reducers:{
        clickAddResult:(state,action)=>{
          state.isClickedAddResult = action.payload
        },
        clickDetailsProceed:(state, action)=>{
            state.isSetupDetails = action.payload
        },
        clickedAprovalPendingResults:(state,action)=>{
            state.isClickedApprovalPendingResults = action.payload
        },
        clickViewResult:(state,action)=>{
            state.isclickedViewResult = action.payload
        },
        clickHistory: (state,action)=>{
            state.isClickedHistory = action.payload
        } 
        
    }
})

export const {clickDetailsProceed,clickedAprovalPendingResults, clickViewResult, clickAddResult, clickHistory} = lectureNavigationSlice.actions

export default lectureNavigationSlice.reducer


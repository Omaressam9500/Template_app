import { createSlice } from "@reduxjs/toolkit";

export interface IFilterState {
    accountType: "",
    isAccUnderReview:boolean
}

const initialState: IFilterState = {
    accountType: '',
    isAccUnderReview:false
}
const AccountTypeSlice = createSlice({
    name: "onBoarding",
    initialState: initialState,
    reducers: {
        addAccountType: (state, action) => {
            state.accountType = action.payload

        },
        
        addAccountStatus:(state,action)=>{
            state.isAccUnderReview=action.payload
        }
   

    },
});

export const { addAccountType,addAccountStatus} = AccountTypeSlice.actions;

export default AccountTypeSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";


import OnBoardingReducer from "./reducers/OnBoardingReducer";

// const rootReducer = combineReducers({
//     filterReducer
// })
// const store = createStore(rootReducer);
// export default store;

const store = configureStore({
    reducer: {
      
        onBoarding:OnBoardingReducer
    },
});
export default store;
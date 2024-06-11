
import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialState = {Datas:[]}


const Profile = createSlice({
    name:"Information",
     initialState,
     reducers:{
        AddData(state,action){
         state.Datas.push(action.payload)
        }
     }
})


console.log(initialState.Datas)

const store = configureStore({
    reducer: Profile.reducer
});


export const Infos = Profile.actions;


export default store
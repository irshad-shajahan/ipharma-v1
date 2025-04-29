import {createSlice} from '@reduxjs/toolkit'

export const languageSlice = createSlice({
    name:"language",
    initialState:'en',
    reducers:{
        switchToArabic:() =>{
            // eslint-disable-next-line no-param-reassign
            state='ar'
        },
        switchToEnglish:()=>{
            // eslint-disable-next-line no-param-reassign
            state='en'
        }
    }
})

export const  {switchToArabic, switchToEnglish} =  languageSlice.actions

export default languageSlice.reducer
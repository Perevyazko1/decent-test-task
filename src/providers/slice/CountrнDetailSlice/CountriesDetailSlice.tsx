import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CountriesType} from "../../../entities/coutries/CoutriesType";


export interface countryDetailState {
    countryDetail:CountriesType[]
}


const initialState: countryDetailState = {
    countryDetail: []

}

export const countryDetailSlice = createSlice({
    name: 'countryDetail',
    initialState,
    reducers: {
        countryDetailApp(state, action: PayloadAction<CountriesType[]>) {

            state.countryDetail = action.payload
        },


    }
})

export default countryDetailSlice.reducer;
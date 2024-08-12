import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CountriesType} from "../../../entities/coutries/CoutriesType";


export interface CountriesListState {
    listCountries:CountriesType[]
}


const initialState: CountriesListState = {
    listCountries: []

}

export const countriesListSlice = createSlice({
    name: 'CountriesList',
    initialState,
    reducers: {
        listCountriesApp(state, action: PayloadAction<CountriesType[]>) {
            state.listCountries = action.payload
        },


    }
})

export default countriesListSlice.reducer;
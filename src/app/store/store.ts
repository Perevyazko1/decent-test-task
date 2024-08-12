import {combineReducers, configureStore} from "@reduxjs/toolkit";
import countriesListSlice from "../../providers/slice/CountriesListSlice/CountriesListSlice";
import countryDetailSlice from "../../providers/slice/CountrнDetailSlice/CountriesDetailSlice";

const rootReducer = combineReducers({

    countriesListSlice,
    countryDetailSlice
})

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer,

    })
}
export type RootState = ReturnType<typeof  rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type  AppDispatch = AppStore["dispatch"]

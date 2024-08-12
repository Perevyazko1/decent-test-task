import React from 'react';
import {MainPage} from "../pages/MainPage/MainPage";
import {DetailPage} from "../pages/DetailPage/DetailPage";
import {createTheme, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";


function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });



    return (
        <ThemeProvider theme={darkTheme}>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"detail/:country"} element={<DetailPage/>}/>
            </Routes>
        </ThemeProvider>


    );
}

export default App;

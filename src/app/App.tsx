import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {DetailPage} from "../pages/DetailPage";


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

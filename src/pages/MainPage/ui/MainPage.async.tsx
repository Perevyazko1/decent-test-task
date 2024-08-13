import {FC, lazy, Suspense} from "react";

export const MainPageAsync = lazy<FC>(()=> import("./MainPage"))

export const DetailsMainPage = () => (
    <Suspense>
        <MainPageAsync/>
    </Suspense>
)
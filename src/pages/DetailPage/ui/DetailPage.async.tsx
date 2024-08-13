import {FC, lazy, Suspense} from "react";

export const DetailPageAsync = lazy<FC>(()=> import("./DetailPage"))

export const DetailsDetailPage = () => (
    <Suspense>
        <DetailPageAsync/>
    </Suspense>
)
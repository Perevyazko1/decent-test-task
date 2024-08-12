import { ReactNode} from 'react';
import {CustomTable} from "../../shared/ui/CustomTable/CustomTable";
import {DetailPage} from "../DetailPage/DetailPage";


interface MainPageProps {
    className?: string
    children?: ReactNode
}


export const MainPage = (props: MainPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props



    return (
        <div
            {...otherProps}
        >
            <CustomTable/>
        </div>
    );
};
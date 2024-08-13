import { ReactNode} from 'react';
import {CustomTable} from "../../../shared/ui/CustomTable/CustomTable";


interface MainPageProps {
    className?: string
    children?: ReactNode
}


const MainPage = (props: MainPageProps) => {
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
export default MainPage
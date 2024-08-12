import { ReactNode} from 'react';


interface DetailPageProps {
    className?: string
    children?: ReactNode
}


export const DetailPage = (props: DetailPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    

    
    return (
        <div
            {...otherProps}
        >
            {children}
        </div>
    );
};
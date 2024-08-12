import {ReactNode, useEffect} from 'react';
import useAxios from "../../hooks/useAxios/useAxios";
import {CountriesType} from "../../../entities/coutries/CoutriesType";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Alert} from "@mui/lab";
import {CircularProgress} from "@mui/material";
import {useAppdispatch, useAppSelector} from "../../hooks/Redux/redux";
import {countriesListSlice} from "../../../providers/slice/CountriesListSlice/CountriesListSlice";


interface CustomTableProps {
    className?: string
    children?: ReactNode
}


export const CustomTable = (props: CustomTableProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const {error, loading, executeRequest} = useAxios<CountriesType[]>();
    const{listCountries} = useAppSelector(state => state.countriesListSlice)
    const{listCountriesApp} = countriesListSlice.actions
    const dispatch = useAppdispatch()


    const fetcData = async () => {
        try {

            const response = await executeRequest('GET', `v3.1/all`);
            if (response) {
                dispatch(listCountriesApp(response))
            }

        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }

    };

    useEffect(() => {
        fetcData();

    }, []);


    return (
        <div
        >
            <TableContainer component={Paper}>
                {!loading && listCountries &&
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell>Страна</TableCell>
                                <TableCell>Капитал</TableCell>
                                <TableCell>Флаг</TableCell>
                                <TableCell>Тайм-зона</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listCountries && listCountries.map((row: CountriesType, index) => (
                                <TableRow
                                    key={index}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >

                                    <TableCell>{row.name.common}</TableCell>
                                    <TableCell>{row.capital}</TableCell>
                                    <TableCell>{row.flag}</TableCell>
                                    <TableCell>{row.timezones}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                }
                {loading && !error &&
                    <CircularProgress
                        sx={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
                }

                {error && !loading && <Alert severity="error">Произошла ошибка</Alert>}
            </TableContainer>


        </div>
    );
};
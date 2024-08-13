import {ReactNode, useEffect, useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import useAxios from "../../../shared/hooks/useAxios/useAxios";
import {CountriesType} from "../../../entities/coutries/CoutriesType";
import {useAppdispatch, useAppSelector} from "../../../shared/hooks/Redux/redux";
import {countryDetailSlice} from "../../../providers/slice/CountrнDetailSlice/CountriesDetailSlice";
import {Alert} from "@mui/lab";
import {useParams} from "react-router-dom";


interface DetailPageProps {
    className?: string
    children?: ReactNode
}


const DetailPage = (props: DetailPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    const {error, loading, executeRequest} = useAxios<CountriesType[]>();
    const {countryDetail} = useAppSelector(state => state.countryDetailSlice)
    const {countryDetailApp} = countryDetailSlice.actions
    const dispatch = useAppdispatch()
    const {country} = useParams()


    const fetcData = async () => {
        try {

            const response = await executeRequest('GET', `v3.1/name/${country}`);
            if (response) {
                dispatch(countryDetailApp(response))
            }

        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }

    };

    useEffect(() => {
        fetcData();

    }, []);
    useEffect(() => {
        console.log(countryDetail[0])
    }, [countryDetail]);


    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                width: "100vw",
                height: "100vh"

            }}
        >

            {!loading && countryDetail[0] &&
                <Card>
                    <Box sx={{display: "flex", height: "800px", width: "100%"}}>
                        <CardMedia
                            sx={{
                                height: "100%",
                                width: countryDetail[0].coatOfArms?.svg ? "50%" : "100%"
                            }}
                            image={countryDetail[0].flags.svg}
                            title={countryDetail[0]?.name?.common}
                        />
                        {countryDetail[0].coatOfArms?.svg &&
                            <CardMedia
                                sx={{
                                    height: "100%",
                                    width: "50%"
                                }}
                                image={countryDetail[0].coatOfArms.svg}
                                title={countryDetail[0]?.name?.common}
                            />

                        }
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {countryDetail[0]?.name?.common}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Population:{countryDetail[0]?.population}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Region:{countryDetail[0]?.region}
                        </Typography>
                    </CardContent>

                </Card>


            }
            {
                loading && !error &&
                <CircularProgress
                    sx={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
            }

            {
                error && !loading && <Alert severity="error">Произошла ошибка</Alert>
            }

        </Box>
    )
        ;
};
export default DetailPage
import React from 'react'
import acknowledgements from '../data/acknowledgements.json';
import CardWork from './CardWork';
import {
    Box,
    Grid,
} from '@mui/material';
const Acknowledgement = () =>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} justify="center">
                    {acknowledgements.map((acknowledgement, index) => (
                        <CardWork
                            work={acknowledgement}
                            key={index}
                        />
                    ))}
            </Grid>
        </Box>
    )
}
export default Acknowledgement;
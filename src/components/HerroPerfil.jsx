import React from "react";
import background from '../img/programming.png';
import perfil from '../img/perfil.jpg';
import {
    Container,
    ButtonBase,
    CardActionArea,
    Box,
    Grid,
    Typography
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
const HerroPerfil = () =>{
    return(
        <>
            <Container
                maxWidth="lg"
                // sx={{
                //     height: "100vh",
                //     backgroundImage: `url(${background})`,
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                // }}
            >
                <Grid container spacing={2}>
                    <Grid item md={6}>
                    <Typography 
                        gutterBottom={true}
                        variant="h1" 
                        component="h1"
                        mt={15}
                        sx={{
                            color:'#17a2b8',
                            }}
                        >
                            Josue Fierro Morfin
                        </Typography>
                    </Grid>
                    <Grid  mt={10} item md={6}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    image={perfil}
                                    alt="Josue Morfin Perfil"
                                    sx={{
                                        borderRadius: 16,
                                        border: 'none' 
                                    }}
                                    />
                                </CardActionArea>
                            </Card>    
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
export default HerroPerfil;
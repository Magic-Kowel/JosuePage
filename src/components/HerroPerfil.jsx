import React from "react";
import perfil from '../img/perfil.jpg';
import {
    Container,
    CardActionArea,
    Grid,
    Typography,
    Card,
    CardMedia
} from '@mui/material';
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
                <Grid mt={10} mb={10}  container spacing={2}>
                    <Grid item md={6}>
                    <Typography 
                        gutterBottom={true}
                        variant="h1" 
                        component="h1"
                        sx={{
                            color:'#17a2b8',
                            "@media (min-width:960px)": {
                                fontSize: "6rem",
                            },
                            "@media (max-width:960px)": {
                                fontSize: "1.9em",
                            },
                            fontWeight: 'bold'
                            }}
                        >
                            Josue Fierro Morfin
                        </Typography>
                    </Grid>
                    <Grid  item md={6}>
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
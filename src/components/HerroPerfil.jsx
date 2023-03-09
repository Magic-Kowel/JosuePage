import React,{useEffect} from "react";
import AOS from 'aos';
import perfil from'../img/perfil.jpg';
import {
    Grid,
    Typography,
    Box
} from '@mui/material';
const HerroPerfil = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
            <Grid mt={10} mb={10} 
                container
                direction="row"
                justifyContent="center"
                alignItems="center" >
                <Grid item md={6}>
                    <Typography
                        data-aos="fade-down"
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
                                textAlign: 'center'
                            },
                            fontWeight: 'bold'
                            }}
                    >
                        Josue Fierro Morfin
                    </Typography>
                </Grid>
                <Grid  item  md={6}>
                    <Box
                        data-aos="fade-down"
                        display="flex" 
                        justifyContent="center" 
                        alignItems="center"
                        component="img"
                        sx={{
                        width: 350,
                        maxWidth: { xs: 250, md: 350 },
                        borderRadius:16,
                        }}
                        alt="Josue Morfin Perfil"
                        src={perfil} 
                    />
                </Grid>

            </Grid>
        </>
    )
}
export default HerroPerfil;
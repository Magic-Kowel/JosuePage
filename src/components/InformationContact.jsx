import React from "react";
import {
    Box,
    Grid,
    Typography ,
    Card,
    CardActionArea,
    CardContent
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const InformationContact=()=>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={6} md={4}  >
                <Card sx={{ maxWidth: 345 ,height: '15rem' }}>
                    <CardActionArea>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <LocationOnIcon
                        fontSize='large'
                        sx={{
                            color:'#17a2b8',
                            fontSize:'7rem',
                        }}/>
                    </Box>
                    <CardContent>
                        <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{
                            textAlign:'center',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            padding: '16px',
                            color:'#17a2b8',
                            }}
                        >
                            Location
                        </Typography>
                        <Typography
                        component="p"
                        color="text.secondary"
                        sx={{textAlign:'center'}}
                        >
                        Manzanillo Colima
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}  >
                <Card sx={{ maxWidth: 345 ,height: '15rem' }}>
                    <CardActionArea>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <PhoneIcon
                        fontSize='large'
                        sx={{
                            color:'#17a2b8',
                            fontSize:'7rem',
                        }}/>
                    </Box>
                    <CardContent>
                        <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{
                            textAlign:'center',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            padding: '16px',
                            color:'#17a2b8',
                            }}
                        >
                            Phone
                        </Typography>
                        <Typography
                        component="p"
                        color="text.secondary"
                        sx={{textAlign:'center'}}
                        >
                        314,128,6432
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}  >
                <Card sx={{ maxWidth: 345 ,height: '15rem' }}>
                    <CardActionArea>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <EmailIcon
                        fontSize='large'
                        sx={{
                            color:'#17a2b8',
                            fontSize:'7rem',
                        }}/>
                    </Box>
                    <CardContent>
                        <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{
                            textAlign:'center',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            padding: '16px',
                            color:'#17a2b8',
                            }}
                        >
                            Email
                        </Typography>
                        <Typography
                        component="p"
                        color="text.secondary"
                        sx={{textAlign:'center'}}
                        >
                        a20170094@utem.edu.mx
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
      </Box>
    )
}
export default  InformationContact;
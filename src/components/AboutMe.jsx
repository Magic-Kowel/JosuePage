import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Box,
    Grid,
    Typography,
    Chip
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeOffIcon from '@mui/icons-material/CodeOff';
const AboutMe = () =>{
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <SchoolIcon
                data-aos="fade-right"
                fontSize='large'
                sx={{
                    textAlign:'center',
                    color:'#17a2b8',
                    fontSize:'15rem',
                }}
              />          
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              data-aos="fade-left"
              variant="h5" 
              component="h3"
              sx={{
                textAlign:'center',
                fontSize: '2.8rem',
                fontWeight: 'bold',
                color:'#6c757d',
                }}
            >
              Universidad Tecnológica de Manzanillo
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
                data-aos="zoom-in"
                variant="h5" 
                component="h3"
                mb={4}
                sx={{
                  textAlign:'center',
                  fontSize: '2.4rem',
                  fontWeight: 'bold',
                  color:'#6c757d',
                  }}
              >
                IT Engineer
              </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
                data-aos="fade-right"
                variant="h5" 
                component="p"
                align="justify"
                mb={4}
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color:'#6c757d',
                  }}
              >
                Hi my name is Josue I am engineer, with capacities of developer 
                &nbsp;<Chip label="Front End" color="info" />&nbsp;  and 
                &nbsp;<Chip label="Back End" color="info" />&nbsp; and good practice of TI
              </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CodeOffIcon
                data-aos="fade-left"
                fontSize='large'
                sx={{
                    textAlign:'center',
                    color:'#17a2b8',
                    fontSize:'15rem',
                }}
              />          
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}
export default AboutMe;
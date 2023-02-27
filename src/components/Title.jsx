import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Typography} from '@mui/material';
const Title = ({title}) =>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <Typography 
            data-aos="fade-up"
            variant="h2" 
            component="h2"
            sx={{
                mb:4,
                mp:4,
                textAlign:'center',
                color: '#17a2b8',
                "@media (min-width:960px)": {
                    fontSize: "3rem",
                },
                "@media (max-width:960px)": {
                    fontSize: "1.9em",
                },
            }}
        >
            {title}
      </Typography>
    );
}
export default Title;

import React from "react";
import {Typography} from '@mui/material';
const Title = ({title}) =>{
    return(
        <Typography 
            variant="h2" 
            component="h2"
            sx={{
                mb:4,
                mp:4,
                textAlign:'center',
                color: '#17a2b8',
                fontSize: '3rem'
            }}
        >
            {title}
      </Typography>
    );
}
export default Title;

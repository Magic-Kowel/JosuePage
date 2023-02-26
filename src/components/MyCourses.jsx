import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
    Box,
    Grid,
    Button,
    Link
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import SendIcon from '@mui/icons-material/Send';
const MyCourses = () =>{
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <Box
            m={10}
            p={10}
        >
            <Grid  >
                <Grid item md={12}>
                    <Box 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        display="flex" 
                        justifyContent="center" 
                        alignItems="center">
                        <SchoolIcon 
                            fontSize='large'
                            sx={{
                                textAlign:'center',
                                color:'#17a2b8',
                                fontSize:'10rem',
                            }}
                        />
                    </Box>
                    <Box 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        display="flex" 
                        justifyContent="center" 
                        alignItems="center">
                        <Button
                        p={200}
                        size="large"
                         
                        endIcon={<SendIcon />}
                        sx={{
                            color:'#17a2b8',

                        }}
                        >
                            <Link
                            href="https://platzi.com/p/josuerodrigofierromorfin/" 
                            underline="none">
                                Go My Courses
                            </Link>
                        </Button> 
                    </Box>
                   
                </Grid>
            </Grid>
        </Box>
    );
}
export default MyCourses;
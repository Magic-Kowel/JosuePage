import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import { 
    SiCss3,
    SiJavascript,
    SiPhp,
    SiNodedotjs,
    SiHtml5,
    SiMysql,
    SiGithub,
    SiBootstrap,
    SiMaterialui,
    SiReact,
    SiAngularjs,
    SiVuedotjs
} from "react-icons/si";

const Skills = () =>{
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
         spacing={4}>
            <Grid item xs={12} sm={4}>
                <List>
                    <ListItem   data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                        <ListItemIcon>
                        <SiCss3
                            size={70} 
                        />
                        </ListItemIcon>
                        <ListItemText primary="Css" secondary="Medium" />
                    </ListItem>
                
                    <ListItem   data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                        <ListItemIcon>
                            <SiJavascript
                                size={70} 
                            />
                        </ListItemIcon>
                            <ListItemText primary="JavaScript" secondary="Advanced" />
                    </ListItem>
               
                    <ListItem   data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                        <ListItemIcon>
                            <SiPhp
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItemText primary="Php" secondary="Advanced" />
                    </ListItem>
               
                    <ListItem   data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                        <ListItemIcon>
                            <SiNodedotjs
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItemText primary="Node" secondary="Medium" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={4}>
                <List>
                    <ListItem   data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                        <ListItemIcon>
                            <SiGithub
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItemText primary="Git / Github" secondary="Medium" />
                    </ListItem>
                    <ListItem   data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                        <ListItemIcon>
                            <SiBootstrap
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItemText primary="Bootstrap" secondary="Advanced" />
                    </ListItem>
                    <ListItem   data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                        <ListItemIcon>
                            <SiMaterialui
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItemText primary="Material-UI" secondary="Advanced" />

                    </ListItem>
                    <ListItem   data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                        <ListItemIcon>
                            <SiReact
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItemText primary="React" secondary="Medium" />
                    </ListItem>
                    
                </List>
            </Grid>
            <Grid item xs={12} sm={4}>
                <List>
                        <ListItem   data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                            <ListItemIcon>
                                <SiAngularjs
                                    size={70} 
                                />
                            </ListItemIcon>
                            <ListItemText primary="Angular.js" secondary="Medium" />
                        </ListItem>
                        <ListItem   data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                            <ListItemIcon>
                                <SiVuedotjs
                                    size={70} 
                                />
                            </ListItemIcon>
                            <ListItemText primary="Vue" secondary="Medium" />
                        </ListItem>
                        <ListItem   data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                            <ListItemIcon>
                                <SiHtml5
                                    size={70} 
                                />
                            </ListItemIcon>
                            <ListItemText primary="Html" secondary="Expert" />
                        </ListItem>
                        <ListItem   data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                            <ListItemIcon>
                                <SiMysql
                                    size={70} 
                                />
                            </ListItemIcon>
                                <ListItemText primary="SQL/Mysql" secondary="Advanced" />
                        </ListItem>
                </List>
            </Grid>
      </Grid>
    )
}
export default Skills;
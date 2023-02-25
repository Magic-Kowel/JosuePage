import React from "react";
import {
    Grid,
    Box,
    Typography,
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
    return(
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
         spacing={4}>
            <Grid item xs={12} sm={4}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                        <SiCss3
                            size={70} 
                        />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="Css" secondary="Medium" />
                        </ListItem>
                    </ListItem>
                
                    <ListItem>
                        <ListItemIcon>
                            <SiJavascript
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="JavaScript" secondary="Advanced" />
                        </ListItem>
                    </ListItem>
               
                    <ListItem>
                        <ListItemIcon>
                            <SiPhp
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="Php" secondary="Advanced" />
                        </ListItem>
                    </ListItem>
               
                    <ListItem>
                        <ListItemIcon>
                            <SiNodedotjs
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="Node" secondary="Medium" />
                        </ListItem>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={4}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <SiGithub
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="Git / Github" secondary="Medium" />
                        </ListItem>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SiBootstrap
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="Bootstrap" secondary="Advanced" />
                        </ListItem>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SiMaterialui
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="Material-UI" secondary="Advanced" />
                        </ListItem>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SiReact
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="React" secondary="Medium" />
                        </ListItem>
                    </ListItem>
                    
                </List>
            </Grid>
            <Grid item xs={12} sm={4}>
                <List>
                        <ListItem>
                            <ListItemIcon>
                                <SiAngularjs
                                    size={70} 
                                />
                            </ListItemIcon>
                            <ListItem>
                                <ListItemText primary="Angular.js" secondary="Medium" />
                            </ListItem>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SiVuedotjs
                                    size={70} 
                                />
                            </ListItemIcon>
                            <ListItem>
                                <ListItemText primary="Vue" secondary="Medium" />
                            </ListItem>
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <SiHtml5
                                size={70} 
                            />
                        </ListItemIcon>
                        <ListItem>
                            <ListItemText primary="Html" secondary="Expert" />
                        </ListItem>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SiMysql
                                    size={70} 
                                />
                            </ListItemIcon>
                            <ListItem>
                                <ListItemText primary="SQL/Mysql" secondary="Advanced" />
                            </ListItem>
                        </ListItem>
                </List>
            </Grid>
      </Grid>
    )
}
export default Skills;
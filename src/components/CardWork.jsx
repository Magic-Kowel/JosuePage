import React from "react"
import { 
    Grid,
    Card,
    CardContent,
    Typography,
    CardActionArea,
    CardMedia,
    Link
  } from '@mui/material';
const CardWork = (props) =>{
    const {work,key} = props;
    return(
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Card sx={{ maxWidth: 345 ,height: 400 }}>
                <CardActionArea>
                  <Link 
                    href={work.url} 
                    underline="none">
                    <CardMedia
                      component="img"
                      height="auto"
                      image={work.img}
                      alt={work.title}
                    />
                  </Link>
                  <CardContent>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="div">
                      {work.title}
                    </Typography>
                    <Typography
                      component="p"
                      color="text.secondary"
                    >
                      {work.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
    );
}
export default CardWork;
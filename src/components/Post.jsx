import React from "react";
import { Favorite, MoreVert, Share,FavoriteBorder} from "@mui/icons-material";
import {Avatar, Box, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Card,Checkbox} from "@mui/material";


const Post = () => {
    return (   
            <Box >
            <Card sx={{ marginBottom:5}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert/>
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="20%"
            image="https://img.freepik.com/photos-gratuite/vue-dessus-pizza-au-pepperoni-saucisses-aux-champignons-poivron-olive-mais-bois-noir_141793-2158.jpg?w=2000"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
            </IconButton>
            <IconButton aria-label="share">
              <Share/>
            </IconButton>
          </CardActions>
        </Card>
            </Box>
        );
    }

export default Post;
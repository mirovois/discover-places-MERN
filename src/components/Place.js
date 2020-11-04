import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import ModalPaper from './ModalPaper';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardActions: {
      display:"flex",
    //   flexGrow: 1,
      justifyContent:"space-around"
  }
}));

export default function Place(props) {
  console.log(props)
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        subheader={props.address}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      {/* <Button size="small" variant="contained">VIEW MAP</Button> */}
      <ModalPaper location={props.coordinates}/>
      <Button size="small" variant="contained">EDIT</Button>
      <Button size="small" variant="contained">DELETE</Button>
      </CardActions>

    </Card>
    
  );
}


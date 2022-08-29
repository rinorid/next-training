import React from 'react';
import cardStyles from './style';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'


export default function MuiCard({id, photoURL, name, first, position, gender, profession}) {
  const cardStyle = cardStyles();

  return (
        <Grid item md={4}>
          <Card className={cardStyle.muiCard}>
            <CardActionArea>
              <CardMedia
                className={cardStyle.media}
                image={photoURL}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  { first != '' && first != '"' ? 
                      (
                          first
                      ):(null) 
                  }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href={{ pathname: '/avatar/[id]', query: { id: id, name: name, position: position, gender: gender, profession: profession, image: photoURL } }}>
                <Button size="small" color="primary">
                  Detail
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
  );
}
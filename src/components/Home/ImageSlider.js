import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width : '100vw'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  ImageList: {
    width: '90%',
    height: '90%',
    [theme.breakpoints.down('xs')]: {
      width: '60%',
      height : '60%' 
    }
  },
  listItem: {
    maxWidth: '280px',
    maxHeight : '200px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100px',
      maxHeight : '100px'
    }
  }
}));



 
export default function ImageSlider() {
  const classes = useStyles();

  const itemData = [
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fpan.jpg?alt=media&token=20ed547c-325e-4082-930f-9bc085c8ed28'
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fcable.jpg?alt=media&token=5329928f-6c85-42a3-b946-58001144b420'
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fconnect.jpg?alt=media&token=7644e0a0-15c1-48f5-877e-e9bb6da6418b'
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fpillow.jpg?alt=media&token=c25e9128-09f2-47b9-9ea2-54d2fe42d852'
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fweight.jpg?alt=media&token=db53fa0a-eca3-4d29-a86e-c3d84bed0146'
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fmic.jpg?alt=media&token=7a301d37-af8d-4e4a-8ccf-b9a799195e59'
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Famp.jpg?alt=media&token=e0812c43-4134-4645-b98d-dd9cc8ac0289'
    },
    {
      img : 'https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fled.jpg?alt=media&token=01a99501-a989-4f8f-9aca-e0add07cc2db'
    }
  ]
  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem className={classes.listItem} key={item.img}>
            <img src={item.img} alt={item.title} className={classes.ImageList} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

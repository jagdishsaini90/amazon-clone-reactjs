import React, { useEffect } from "react";
import Product from "../Cards/ProductCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Loader from "../Loader/Loader";
import book from "../../images/book.jpg";

const useStyles = makeStyles((theme) => ({
  list: {
    justifyContent: "center",
    padding: "0",
    backgroundColor: "rgb(192, 190, 190)",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
    },
  },
}));
const EBooks = ({ ebooks, postCart, isloading }) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  const list = ebooks.map((doc) => {
    return (
      <Grid item xs={12} sm={4} md={3} key={doc._id}>
        <Fade>
          <Product
            productID={doc._id}
            title={doc.title}
            image={doc.images ? doc.images.large.url : doc.image[1].medium}
            price={doc.price > 100 ? doc.price / 100 : doc.price}
            rating={4}
            postCart={postCart}
            description={doc.description}
            type={true}
          />
        </Fade>
      </Grid>
    );
  });
  if (isloading) {
    return <Loader />;
  }
  return (
    <>
      <div className={classes.image}>
        <img src={book} alt="" width="100%" height="100%" />
      </div>
      <Grid container className={classes.list} style={{ padding: "0" }}>
        {list}
      </Grid>
    </>
  );
};

export default EBooks;

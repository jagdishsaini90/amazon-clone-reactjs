import React from "react";
import Product from "../Cards/ProductCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  list: {
    justifyContent: "center",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
}));
const ProductList = ({ products, postCart }) => {
  const classes = useStyles();
  let List = [];
  for (var i = 0; i < 30; i++) {
    List[i] = products[i];
  }
  console.log("ProductList Page");

  const list = List.map((doc) => {
    return (
      <Grid item xs={12} sm={4} md={3} key={doc._id}>
        <Fade>
          <Product
            productID={doc._id}
            title={doc.title}
            image={
              doc.filename
                ? doc.filename
                : doc.images
                ? doc.images.medium.url
                : doc.image[1].medium
            }
            price={doc.price > 100 ? doc.price / 100 : doc.price}
            rating={doc.rating}
            postCart={postCart}
            description={doc.description}
          />
        </Fade>
      </Grid>
    );
  });
  return (
    <Grid container className={classes.list} style={{ padding: "0" }}>
      {list}
    </Grid>
  );
};

export default ProductList;

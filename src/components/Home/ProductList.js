import React from "react";
import Product from "./ProductCard";
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
const ProductList = ({ products, postCart, fetchSingleProduct }) => {
     const classes = useStyles();
     const list = products.map((doc) => {
          return (
               <Grid item xs={12} sm={4} md={3} key={doc._id}>
                    <Fade>
                         <Product
                              productID={doc._id}
                              title={doc.title}
                              image={doc.filename}
                              price={doc.price}
                              rating={doc.rating}
                              postCart={postCart}
                              description={doc.description}
                              fetchSingleProduct={fetchSingleProduct}
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

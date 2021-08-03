import React from "react";
import ProductList from "./ProductList";
import { Grid, Hidden } from "@material-ui/core";
import Loader from "../Loader/Loader";
import CarouselComp from "../Carousel/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import ShowCaseCards from "./ShowcaseCards";
import ImageSlider from "./ImageSlider";

const useStyles = makeStyles((theme) => ({
  ProductList: {
    position: "absolute",
    top: "25rem",
    zIndex: "10",
    width: "100%",
    backgroundColor: "rgb(192, 190, 190)",
    [theme.breakpoints.down("xs")]: {
      top: "13rem",
    },
  },
  HomeGrid: {
    padding: "0px",
  },
  homeImage: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "150px",
    },
  },
}));

function Home({ products, isloading, postCart, fetchSingleProduct }) {
  const classes = useStyles();
  if (isloading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <div>
          <CarouselComp />
        </div>
      </div>
      <div className={classes.ProductList}>
        <Grid container spacing={1} style={{ padding: "0" }}>
          <Grid item xs={6} sm={3} style={{ padding: 0 }}>
            <ShowCaseCards
              key="23445930"
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              postCart={postCart}
              image="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsp.jpeg?alt=media&token=8d13d0a6-b46b-40a8-ac38-64f36176869f"
            />
          </Grid>
          <Grid item xs={6} sm={3} style={{ padding: 0 }}>
            <ShowCaseCards
              key="49538094"
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              postCart={postCart}
              image="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsw.jpg?alt=media&token=4070ccdd-84a1-4d61-96a6-f04f6198acb2"
            />
          </Grid>
          <Grid item xs={6} sm={3} style={{ padding: 0 }}>
            <ShowCaseCards
              key="12321341"
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              postCart={postCart}
              image="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fbook1.jpg?alt=media&token=832bbbff-fd14-46de-91c9-1a40de7fd1da"
            />
          </Grid>
          <Hidden only={["xs"]}>
            <Grid item xs={6} sm={3} style={{ padding: 0 }}>
              <ShowCaseCards
                key="49538094"
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                postCart={postCart}
                image="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsw.jpg?alt=media&token=4070ccdd-84a1-4d61-96a6-f04f6198acb2"
              />
            </Grid>
          </Hidden>
          <Hidden only={["sm", "md", "lg"]}>
            <Grid item xs={6} sm={3} style={{ padding: 0 }}>
              <ShowCaseCards
                key="3254354345"
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Ftablet.jpg?alt=media&token=4df2e18f-c88b-47b2-8d34-9d9f9875f8d1"
                postCart={postCart}
              />
            </Grid>
          </Hidden>
        </Grid>
        <Grid container>
          <ImageSlider />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} style={{ padding: 0 }}>
            <ShowCaseCards
              key="4903850"
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              postCart={postCart}
              image="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fmonitor.jpg?alt=media&token=96ef7408-2182-4aae-bded-9f4ff53f03fa"
            />
          </Grid>
          <Grid item xs={6} sm={4} style={{ padding: 0 }}>
            <ShowCaseCards
              key="23445930"
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              postCart={postCart}
              image="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsp.jpeg?alt=media&token=8d13d0a6-b46b-40a8-ac38-64f36176869f"
            />
          </Grid>
          <Hidden only={["xs"]}>
            <Grid item xs={12} sm={4} style={{ padding: 0 }}>
              <ShowCaseCards
                key="3254354345"
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Ftablet.jpg?alt=media&token=4df2e18f-c88b-47b2-8d34-9d9f9875f8d1"
                postCart={postCart}
              />
            </Grid>
          </Hidden>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fhome.jpg?alt=media&token=c4a41367-078b-4a9f-b739-bbb09faf6f94"
              alt=""
              width="100%"
              className={classes.homeImage}
            />
          </Grid>
        </Grid>
        <div>
          <ProductList products={products} postCart={postCart} />
        </div>
      </div>
    </div>
  );
}

export default Home;

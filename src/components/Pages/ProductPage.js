import React, { useEffect, memo } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../Loader/Loader";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";
import ReviewPage from "./ReviewPage";

const useStyles = makeStyles((theme) => ({
  MainProduct: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: "20px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  Image: {
    marginRight: "2rem",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      borderRadius: "5px",
      marginRight: "0",
      height: "80%",
    },
  },
  title: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      marginTop: "1rem",
    },
  },
  button: {
    cursor: "pointer",
    fontSize: "11px",
    backgroundColor: "#FFD814",
    borderColor: "#a88734 #9c7e31 #846a29",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: "100%",
    },
  },
  description: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      marginBottom: "1.5rem",
    },
  },
}));
const ProductContent = ({ product, isloading, postCart, length }) => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  if (isloading) {
    return <Loader />;
  }
  const handlePost = async () => {
    if (!currentUser) {
      history.push("/login");
      return;
    }
    await postCart({
      id: product._id,
      title: product.title,
      price: product.price > 100 ? product.price / 100 : product.price,
      image: product.filename
        ? product.filename
        : product.images
        ? product.images.large.url
        : product.image[2].large,
      rating: product.rating ? product.rating : 4,
    });
    history.push("/cart");
  };

  return (
    <div key={product._id}>
      <Container maxWidth="md" style={{ marginBottom: "4rem" }}>
        <div className={classes.MainProduct}>
          <div className={classes.Image}>
            <img
              src={
                product.filename
                  ? product.filename
                  : product.images
                  ? product.images.large.url
                  : product.image[2].large
              }
              alt={product.title}
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <Typography className={classes.title} variant="h3">
              {product.title}
            </Typography>
            {product.author ? (
              Array.isArray(product.author) ? (
                <Typography variant="p">by {product.author[0]}</Typography>
              ) : (
                <Typography variant="p">by {product.author}</Typography>
              )
            ) : null}
            <div>
              {Array(product.rating ? product.rating : 4)
                .fill()
                .map((_, i) => (
                  <StarIcon
                    style={{
                      color: "orange",
                    }}
                  />
                ))}
            </div>
            <Typography style={{ fontWeight: "bold" }}>
              Price : $
              {product.price
                ? product.price > 100
                  ? product.price / 100
                  : product.price
                : 40.99}
            </Typography>
            {product.productgroup === "Book" ? null : (
              <div>
                {product.manufacturer ? (
                  <Typography style={{ fontWeight: "bold" }}>
                    Manufacturer :{" "}
                    {product.manufacturer
                      ? product.manufacturer
                      : " not available"}
                  </Typography>
                ) : null}
              </div>
            )}
            {product.publisher ? (
              <Typography style={{ fontWeight: "bold" }}>
                Publisher :{" "}
                {product.publisher ? product.publisher : " not available"}
              </Typography>
            ) : null}
            <Button className={classes.button} onClick={handlePost}>
              Add to Cart
            </Button>
          </div>
        </div>
        <hr />
        {product.feature ? (
          Array.isArray(product.feature) ? (
            <div>
              <h4>Features</h4>
              {product.feature.map((doc, i) => {
                return (
                  <Typography
                    key={i}
                    className={classes.description}
                    style={{ color: "#9b7003" }}
                  >
                    ----{doc}
                  </Typography>
                );
              })}
              <hr />
            </div>
          ) : (
            <Typography
              className={classes.description}
              style={{ color: "#9b7003" }}
            >
              <h4>Features</h4>
              ----{product.feature}
            </Typography>
          )
        ) : null}
        <h4>Description</h4>
        <Typography className={classes.description}>
          {product.description}
        </Typography>
        <hr />
        <div>
          {product.review ? (
            <div>
              <h3>Reviews({product.review.length})</h3>
              {product.review.map((doc) => {
                return (
                  <ReviewPage
                    doc={doc}
                    key={doc.reviewId}
                    productId={product._id}
                  />
                );
              })}
            </div>
          ) : (
            <h3>
              0 reviews for this{" "}
              <p
                style={{
                  color: "orange",
                  padding: "0",
                  margin: "0",
                }}
              >
                {product.title}
              </p>
            </h3>
          )}
        </div>
      </Container>
    </div>
  );
};
export default memo(ProductContent);

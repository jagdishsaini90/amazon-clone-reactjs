import React from "react";
import { useHistory, Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import INF from "../../images/INF.png";

const useStyles = makeStyles((theme) => ({
  Mainproduct: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
    minWidth: "250px",
    backgroundColor: "white",
    zIndex: "1",
    borderRadius: "10px",
    margin: "1rem 1rem 1rem 0",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "390px",
      maxHeight: "150px",
      minHeight: "0",
      flexDirection: "row",
      borderRadius: "5px",
      padding: "10px",
      margin: "5px",
    },
  },
  Image: {
    maxHeight: "120px",
    width: " 100%",
    objectFit: "contain",
    marginBottom: "15px",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "200px",
      minHeight: "200px",
      maxWidth: "100px",
    },
  },
  productInfo: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    fontSize: "15px",
    marginBottom: "15px",
    maxWidth: "300px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      minWidth: "200px",
    },
  },
  Rating: {
    display: "flex",
    margin: "0",
  },

  ratingIcon: {
    width: "20px",
    color: "#C7511F",
  },
  button: {
    cursor: "pointer",
    fontSize: "11px",
    backgroundColor: "#FFD814",
    borderColor: "#a88734 #9c7e31 #846a29",
    [theme.breakpoints.down("xs")]: {
      fontSize: "6px",
    },
  },
  price: {
    marginTop: "3px",
  },
  typo: {
    maxWidth: "200px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      maxWidth: "200px",
    },
  },
}));

function Product({
  productID,
  title,
  image,
  price,
  rating,
  postCart,
  description,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handlePost = async () => {
    var newPrice = price > 100 ? price / 100 : price;
    await postCart({ id: productID, title, image, price: newPrice, rating });
    history.push("/cart");
  };
  console.log("ProductCard Page");

  return (
    <div className={classes.Mainproduct}>
      <img src={image ? image : INF} alt="" className={classes.Image} />
      <div className={classes.productInfo}>
        <Link
          to={`/product/${productID}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography
            className={classes.typo}
            noWrap
            variant="subtitle2"
            style={{ marginBottom: "0" }}
          >
            {title}
          </Typography>
        </Link>
        <Typography
          className={classes.typo}
          noWrap
          variant="caption"
          color="textSecondary"
        >
          {description}
        </Typography>
        <p className={classes.price}>
          <small>$</small>
          <strong>{price ? price : 12.99}</strong>
        </p>
        <div className={classes.Rating}>
          {Array(rating > 1 ? rating : 3)
            .fill()
            .map((_, i) => (
              <StarIcon className={classes.ratingIcon} />
            ))}
        </div>
        <Button className={classes.button} onClick={handlePost}>
          Add to Basket
        </Button>
      </div>
    </div>
  );
}

export default Product;

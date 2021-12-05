import React from "react";
import { useHistory, Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import { Typography, Button } from "@material-ui/core";
import INF from "../../images/INF.png";
import { useStyles } from "./CardsStyles";


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
              <StarIcon key={i} className={classes.ratingIcon} />
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

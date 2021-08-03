import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import INF from "../../images/INF.png";
import "./CartProduct.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  deleteCart,
  isloading,
}) {
  const classes = useStyles();

  if (isloading) {
    return (
      <Backdrop className={classes.backdrop} open={isloading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <div className="checkoutProduct">
      {image ? (
        <img className="checkoutProduct__image" src={image} alt="" />
      ) : (
        <img className="checkoutProduct__image" src={INF} alt="" />
      )}
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <button style={{ cursor: "pointer" }} onClick={() => deleteCart(id)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

import React from "react";
import { useHistory } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Mainproduct: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    zIndex: "1",
    borderRadius: "10px",
    paddingBottom: "10px",
    margin: "1rem 1rem 1rem 0rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      minHeight: "250px",
      margin: "5px",
      borderRadius: "5px",
    },
  },
  Image: {
    maxHeight: "120px",
    width: " 100%",
    objectFit: "contain",
    marginBottom: "15px",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "100px",
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
    [theme.breakpoints.down("xs")]: {},
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
    paddingBottom: "10px",
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
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      maxWidth: "150px",
    },
  },
}));

function ShowCaseCards({
  id,
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
    await postCart({ id, title, image, price, rating });
    history.push("/cart");
  };
  console.log("ShowCaseCard Page");

  return (
    <div className={classes.Mainproduct} key={id}>
      <img src={image} alt="" className={classes.Image} />
      <div className={classes.productInfo}>
        <Typography
          className={classes.typo}
          noWrap
          variant="subtitle2"
          style={{ marginBottom: "0" }}
        >
          {title}
        </Typography>
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
          <strong>{price}</strong>
        </p>
        <div className={classes.Rating}>
          {Array(rating)
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

export default ShowCaseCards;

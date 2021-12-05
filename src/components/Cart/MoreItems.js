import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./CartStyles";

const MoreItems = ({ randomProducts, postCart }) => {
  const classes = useStyles();

  if (!randomProducts) {
    return null;
  }
  let list = randomProducts.map((doc) => {
    let key = Math.random().toString(16).slice(2);
    return (
      <div className={classes.MoreItems} key={key}>
        <img
          src={
            doc.filename
              ? doc.filename
              : doc.images
              ? doc.images.medium.url
              : doc.image[1].medium
          }
          alt={doc.title}
          className={classes.MoreItemImage}
        />
        <div className={classes.MoreItemInfo}>
          <Link
            style={{
              marginBottom: "0",
              textDecoration: "none",
            }}
            to={`/product/${doc._id}`}
          >
            {doc.title}
          </Link>
          <div className={classes.MoreItemRating}>
            {Array(doc.rating ? doc.rating : 3)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>
          <p style={{ marginTop: "0" }}>${doc.price ? doc.price : 12.99}</p>
          <button
            className={classes.MoreItemButton}
            onClick={() =>
              postCart({
                id: doc._id,
                title: doc.title,
                price: doc.price ? doc.price : 12.99,
                image: doc.filename
                  ? doc.filename
                  : doc.images
                  ? doc.images.medium.url
                  : doc.image[1].medium,
                rating: doc.rating ? doc.rating : 4,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
  return <>{list}</>;
};

export default MoreItems;

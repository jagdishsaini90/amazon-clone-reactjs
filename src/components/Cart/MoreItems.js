import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
     More: {
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
          width: "100%",
          [theme.breakpoints.down("xs")]: {
               width: "85%",
          },
     },
     MoreItems: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          padding: "5px",
          borderRadius: "10px",
          borderBottom: "1px solid grey",
          [theme.breakpoints.down("xs")]: {
               fontSize: "10px",
          },
     },
     MoreItemImage: {
          width: "100px",
          height: "100px",
          marginRight: "10px",
          [theme.breakpoints.down("xs")]: {
               width: "60px",
               height: "60px",
          },
     },
     MoreItemInfo: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          marginBottom: "0",
     },
     MoreItemButton: {
          backgroundColor: "#FFD814",
          borderColor: "#a88734 #9c7e31 #846a29",
          border: ".5px solid black",
          cursor: "pointer",
          [theme.breakpoints.down("xs")]: {
               fontSize: "7px",
          },
     },
     MoreItemRating: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: "0",
          marginTop: "0",
     },
}));

const MoreItems = ({ randomProducts, postCart }) => {
     const classes = useStyles();

     if (!randomProducts) {
          return null;
     }
     var list = randomProducts.map((doc) => {
          var key = Math.random().toString(16).slice(2);
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
                         <p style={{ marginTop: "0" }}>
                              ${doc.price ? doc.price : 12.99}
                         </p>
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

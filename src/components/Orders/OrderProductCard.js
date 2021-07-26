import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Link, useHistory } from "react-router-dom";
import { firestore, auth } from "../../firebase/firebase";
import AddressToolTip from "./AddressToolTip";
import "./AddressHover.css";

const useStyles = makeStyles((theme) => ({
     main: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          border: "1px solid black",
          fontSize: "13px",
          width: "100%",
          overflow: "hidden",
          marginBottom: "1rem",
     },
     buttons: {
          marginRight: "1rem",
          maxWidth: "250px",
          [theme.breakpoints.down("xs")]: {
               paddingLeft: "25px",
          },
     },
     button: {
          backgroundColor: "rgb(235, 233, 233)",
          fontSize: "12px",
          fontWeight: "bold",
          [theme.breakpoints.down("xs")]: {
               maxWidth: 100,
               fontSize: "6px",
               padding: 2,
          },
     },
     details: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          [theme.breakpoints.down("xs")]: {
               fontSize: "7px",
          },
     },
     mainItem1: {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: "7px",
          backgroundColor: "rgb(235, 233, 233)",
          borderBottom: "1px solid black",
     },
     mainItem2: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: "row",
          padding: "5px",
     },
     orderDetails: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
     },
     product: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
     },
     productImage: {
          width: 100,
          height: 120,
          [theme.breakpoints.down("xs")]: {
               width: 50,
               height: 55,
          },
     },
     productDetails: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          paddingLeft: "10px",
          [theme.breakpoints.down("xs")]: {
               fontSize: "7px",
               maxWidth: "120px",
          },
     },
     addressData: {
          marginBottom: "1rem",
          [theme.breakpoints.down("xs")]: {
               fontSize: "12px",
          },
     },
}));

const OrderProductCard = ({ order, postCart }) => {
     const months = [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
     ];
     const classes = useStyles();
     const history = useHistory();
     const [reviewed, setReviewed] = useState(false);

     const handlePost = async () => {
          await postCart({
               id: order.id,
               title: order.title,
               image: order.image,
               price: order.price,
               rating: order.rating,
          });
          history.push("/cart");
     };
     useEffect(() => {
          firestore
               .collection("users")
               .doc(auth.currentUser.uid)
               .get()
               .then((snapshot) => {
                    return snapshot.data().reviewList;
               })
               .then((res) => {
                    if (res.includes(order.id)) {
                         setReviewed(true);
                    }
               })
               .catch((error) => console.log(error.message));
     }, [order.id]);
     console.log("Order Product Card Page");

     return (
          <Fade center>
               <div className={classes.main}>
                    <div className={classes.mainItem1}>
                         <div className={classes.orderDetails}>
                              <Typography
                                   variant="subtitle2"
                                   className={classes.details}
                                   style={{ marginRight: "1rem" }}
                              >
                                   ORDER PLACED
                                   <Typography
                                        variant="subtitle2"
                                        color="textSecondary"
                                   >
                                        {order.date.toDate().getDate()}{" "}
                                        {months[order.date.toDate().getMonth()]}{" "}
                                        {order.date.toDate().getFullYear()}
                                   </Typography>
                              </Typography>
                              <Typography
                                   variant="subtitle2"
                                   className={classes.details}
                                   style={{ marginRight: "1rem" }}
                              >
                                   TOTAL
                                   <Typography
                                        variant="subtitle2"
                                        color="textSecondary"
                                   >
                                        ${order.price}
                                   </Typography>
                              </Typography>
                              <Typography className={classes.details}>
                                   SHIP TO
                                   <Typography
                                        className="tooltip"
                                        variant="subtitle2"
                                        color="textSecondary"
                                   >
                                        {order.address.fullname.toUpperCase()}

                                        <div
                                             key={order.address.id}
                                             id="tooltiptext"
                                             className={classes.addressData}
                                        >
                                             <Typography
                                                  variant="subtitle2"
                                                  color="textSecondary"
                                             >
                                                  {order.address.fullname}
                                             </Typography>
                                             <AddressToolTip order={order} />
                                        </div>
                                   </Typography>
                              </Typography>
                         </div>
                         <div style={{ marginRight: "1rem" }}>
                              <Typography
                                   variant="subtitle2"
                                   className={classes.details}
                              >
                                   ORDER # 402-7581203-0973963
                                   <Typography>View order details</Typography>
                              </Typography>
                         </div>
                    </div>
                    <div className={classes.mainItem2}>
                         <div className={classes.product}>
                              <div className={classes.productImage}>
                                   <img
                                        src={order.image}
                                        alt=""
                                        width="100%"
                                        height="100%"
                                   />
                              </div>
                              <div className={classes.productDetails}>
                                   <Typography
                                        variant="subtitle2"
                                        noWrap={false}
                                        style={{ color: "#0066c0" }}
                                   >
                                        {order.title}
                                   </Typography>
                                   <Typography
                                        variant="subtitle2"
                                        color="textSecondary"
                                        noWrap
                                   >
                                        Return window closed on 25-Aug-2020
                                   </Typography>
                                   <Button
                                        variant="contained"
                                        style={{ backgroundColor: "#f0c14b" }}
                                        className={classes.button}
                                        onClick={handlePost}
                                   >
                                        Buy it again
                                   </Button>
                              </div>
                         </div>
                         <div className={classes.buttons}>
                              {reviewed ? (
                                   <Button
                                        variant="contained"
                                        fullWidth
                                        style={{
                                             marginBottom: "5px",
                                             fontWeight: "bold",
                                        }}
                                        className={classes.button}
                                   >
                                        Click to Edit review
                                   </Button>
                              ) : (
                                   <Link
                                        to={`/review?id=${order.id}`}
                                        style={{
                                             textDecoration: "none",
                                             color: "black",
                                        }}
                                   >
                                        <Button
                                             variant="contained"
                                             fullWidth
                                             style={{
                                                  marginBottom: "5px",
                                             }}
                                             className={classes.button}
                                        >
                                             Write a Product Review
                                        </Button>
                                   </Link>
                              )}
                              <Button
                                   variant="contained"
                                   fullWidth
                                   className={classes.button}
                              >
                                   Archive Order
                              </Button>
                         </div>
                    </div>
               </div>
          </Fade>
     );
};

export default OrderProductCard;

import React from "react";
import {
     Grid,
     Button,
     Accordion,
     AccordionSummary,
     AccordionDetails,
     Typography,
     AppBar,
     Tab,
     Tabs,
     Box,
} from "@material-ui/core";
import amazon from "../../images/amazon.png";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import CheckoutProduct from "./CartProduct";
import Loader from "../Loader/Loader";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function sum(cart) {
     let SUM = 0;
     cart.forEach((item) => {
          SUM += item.price;
     });
     return Math.round((SUM + Number.EPSILON) * 100) / 100;
}
function TabPanel(props) {
     const { children, value, index, ...other } = props;

     return (
          <div
               role="tabpanel"
               hidden={value !== index}
               id={`simple-tabpanel-${index}`}
               aria-labelledby={`simple-tab-${index}`}
               {...other}
          >
               {value === index && (
                    <Box p={3}>
                         <Typography>{children}</Typography>
                    </Box>
               )}
          </div>
     );
}

TabPanel.propTypes = {
     children: PropTypes.node,
     index: PropTypes.any.isRequired,
     value: PropTypes.any.isRequired,
};

function a11yProps(index) {
     return {
          id: `simple-tab-${index}`,
          "aria-controls": `simple-tabpanel-${index}`,
     };
}

const useStyles = makeStyles((theme) => ({
     root: {
          width: "100%",
     },
     gridArea: {
          backgroundColor: "#EAEDED",
          padding: "20px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          [theme.breakpoints.down("xs")]: {
               padding: "5px",
               justifyContent: "center",
               alignItems: "center",
          },
     },
     gridCartArea: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          padding: "0",
          [theme.breakpoints.down("xs")]: {
               marginTop: "2rem",
               alignItems: "center",
               justifyContent: "center",
          },
     },
     heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
     },
     demo1: {
          backgroundColor: "white",
          boxShadow: "none",
     },
     EmptyCart: {
          width: "95%",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "1rem",
          [theme.breakpoints.down("xs")]: {
               fontSize: "10px",
               width: "80%",
          },
     },
     YourItems: {
          width: "95%",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          [theme.breakpoints.down("xs")]: {
               fontSize: "10px",
               width: "80%",
          },
     },
     tabs: {
          fontSize: "10px",
          [theme.breakpoints.down("xs")]: {
               fontSize: "8px",
               padding: "0",
               paddingLeft: "10px",
          },
     },
     Extrainfo: {
          [theme.breakpoints.down("xs")]: {
               fontSize: "8px",
               maxWidth: "90%",
          },
     },
     shoppingCart: {
          backgroundColor: "white",
          minWidth: "100%",
          borderRadius: "10px",
          marginBottom: "1rem",
          paddingLeft: "10px",
          [theme.breakpoints.down("xs")]: {
               fontSize: "13px",
               minWidth: "90%",
          },
     },
     sideBar: {
          [theme.breakpoints.down("xs")]: {
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               flexDirection: "column",
          },
     },
     Payment: {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          padding: "10px",
          backgroundColor: "white",
          [theme.breakpoints.down("xs")]: {
               alignItems: "center",
               fontSize: "12px",
               maxWidth: "80%",
               textAlign: "center",
          },
     },
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

const Cart = ({
     cart,
     deleteCart,
     isloading,
     cartLoading,
     length,
     postCart,
}) => {
     const classes = useStyles();
     const [value, setValue] = React.useState(0);

     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

     if (cartLoading) {
          return <Loader />;
     }

     return (
          <Grid container spacing={2} className={classes.gridArea}>
               <Grid item xs={12} sm={9} className={classes.gridCartArea}>
                    {cart.length > 0 ? (
                         <div className={classes.shoppingCart}>
                              <h1 style={{ marginLeft: "2%" }}>
                                   Shopping Cart
                              </h1>
                              {cart.map((item) => (
                                   <Grid
                                        item
                                        xs={12}
                                        key={item.id}
                                        style={{
                                             marginBottom: "1rem",
                                             borderRadius: "10px",
                                        }}
                                   >
                                        <CheckoutProduct
                                             id={item.id}
                                             title={item.title}
                                             image={item.image}
                                             price={item.price}
                                             rating={item.rating}
                                             deleteCart={deleteCart}
                                             isloading={isloading}
                                        />
                                   </Grid>
                              ))}
                              <hr />
                              <div style={{ padding: "5px" }}>
                                   <h2 style={{ textAlign: "right" }}>
                                        Subtotal ({length}{" "}
                                        {length > 1 ? "items" : "item"}):
                                        <AttachMoneyIcon />
                                        {sum(cart)}
                                   </h2>
                              </div>
                         </div>
                    ) : (
                         <Fade>
                              <div className={classes.EmptyCart}>
                                   <h1>Your cart is empty.</h1>
                                   <p>
                                        Your shopping cart is waiting. Give it
                                        purpose – fill it with groceries,
                                        clothing, household supplies,
                                        electronics and more. Continue shopping
                                        on the Amazon.in homepage, learn about
                                        today's deals, or visit your Wish List.
                                   </p>
                              </div>
                         </Fade>
                    )}
                    <Fade>
                         <div className={classes.YourItems}>
                              <h1 style={{ marginBottom: "0" }}>Your items</h1>
                              <AppBar
                                   position="static"
                                   color="default"
                                   className={classes.demo1}
                              >
                                   <Tabs value={value} onChange={handleChange}>
                                        <Tab
                                             label="No items saved for later
"
                                             {...a11yProps(0)}
                                             className={classes.tabs}
                                        />
                                        <Tab
                                             label="Buy it again"
                                             {...a11yProps(1)}
                                             className={classes.tabs}
                                        />
                                   </Tabs>
                              </AppBar>
                              <TabPanel
                                   className={classes.tabs}
                                   value={value}
                                   index={0}
                              ></TabPanel>
                              <TabPanel
                                   className={classes.tabs}
                                   value={value}
                                   index={1}
                              >
                                   No items to Buy again.
                              </TabPanel>
                         </div>
                    </Fade>
                    <Fade>
                         <p className={classes.Extrainfo}>
                              The price and availability of items at Amazon.in
                              are subject to change. The shopping cart is a
                              temporary place to store a list of your items and
                              reflects each item's most recent price. Do you
                              have a promotional code? We'll ask you to enter
                              your claim code when it's time to pay.
                         </p>
                    </Fade>
               </Grid>
               <Grid item xs={12} sm={3}>
                    {cart.length > 0 ? (
                         <div className={classes.sideBar}>
                              <div style={{ marginBottom: "1rem" }}>
                                   <img src={amazon} alt="amazon" />
                              </div>
                              <div className={classes.Payment}>
                                   {cart.length > 0 ? (
                                        "Your order is eligible for FREE Delivery. Select this option at checkout. Details"
                                   ) : (
                                        <p>No item is Selected</p>
                                   )}
                                   {cart.length > 0 ? (
                                        <h2>
                                             Subtotal ({length}{" "}
                                             {length > 1 ? "items" : "item"}):
                                             <AttachMoneyIcon />
                                             {sum(cart)}
                                        </h2>
                                   ) : null}
                                   <Button
                                        style={{
                                             marginBottom: "1rem",
                                             width: "80%",
                                             fontSize: "14px",
                                             backgroundColor: "yellow",
                                        }}
                                   >
                                        <Link
                                             to={"/address"}
                                             style={{
                                                  textDecoration: "none",
                                                  fontWeight: "bold",
                                                  color: "black",
                                             }}
                                        >
                                             Proceed to Buy
                                        </Link>
                                   </Button>
                                   {cart.length > 0 ? null : (
                                        <Accordion style={{ width: "80%" }}>
                                             <AccordionSummary
                                                  expandIcon={
                                                       <ExpandMoreIcon />
                                                  }
                                                  aria-controls="panel1a-content"
                                             >
                                                  <Typography
                                                       className={
                                                            classes.heading
                                                       }
                                                  >
                                                       EMI Available
                                                  </Typography>
                                             </AccordionSummary>
                                             <AccordionDetails>
                                                  <Typography>
                                                       Your order qualifies for
                                                       EMI with valid credit
                                                       cards (not available on
                                                       purchase of Gold,
                                                       Jewelry, Gift cards and
                                                       Amazon pay balance top
                                                       up).{" "}
                                                       <a href="!#">
                                                            Learn more
                                                       </a>
                                                  </Typography>
                                             </AccordionDetails>
                                        </Accordion>
                                   )}
                              </div>
                         </div>
                    ) : (
                         <div
                              style={{
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   flexDirection: "column",
                              }}
                              key=""
                         >
                              <div className={classes.More}>
                                   <p>More items to explore</p>
                                   <div className={classes.MoreItems}>
                                        <img
                                             src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsp.jpeg?alt=media&token=8d13d0a6-b46b-40a8-ac38-64f36176869f"
                                             alt="speaker"
                                             className={classes.MoreItemImage}
                                        />
                                        <div className={classes.MoreItemInfo}>
                                             <Link
                                                  style={{
                                                       marginBottom: "0",
                                                       textDecoration: "none",
                                                  }}
                                             >
                                                  Amazon Echo (3rd generation) |
                                                  Smart speaker with Alexa,
                                                  Charcoal Fabric
                                             </Link>
                                             <div
                                                  className={
                                                       classes.MoreItemRating
                                                  }
                                             >
                                                  {Array(5)
                                                       .fill()
                                                       .map((_, i) => (
                                                            <p>🌟</p>
                                                       ))}
                                             </div>
                                             <p style={{ marginTop: "0" }}>
                                                  $98.99
                                             </p>
                                             <button
                                                  className={
                                                       classes.MoreItemButton
                                                  }
                                                  onClick={() =>
                                                       postCart({
                                                            id: "23445930",
                                                            title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
                                                            price: 98.99,
                                                            image: "https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsp.jpeg?alt=media&token=8d13d0a6-b46b-40a8-ac38-64f36176869f",
                                                            rating: 5,
                                                       })
                                                  }
                                             >
                                                  Add to Cart
                                             </button>
                                        </div>
                                   </div>
                                   <div className={classes.MoreItems}>
                                        <img
                                             src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Ftablet.jpg?alt=media&token=4df2e18f-c88b-47b2-8d34-9d9f9875f8d1"
                                             alt="speaker"
                                             className={classes.MoreItemImage}
                                        />
                                        <div className={classes.MoreItemInfo}>
                                             <Link
                                                  style={{
                                                       marginBottom: "0",
                                                       textDecoration: "none",
                                                  }}
                                             >
                                                  New Apple iPad Pro (12.9-inch,
                                                  Wi-Fi, 128GB) - Silver (4th
                                                  Generation)
                                             </Link>
                                             <div
                                                  className={
                                                       classes.MoreItemRating
                                                  }
                                             >
                                                  {Array(4)
                                                       .fill()
                                                       .map((_, i) => (
                                                            <p>🌟</p>
                                                       ))}
                                             </div>
                                             <p style={{ marginTop: "0" }}>
                                                  $598.99
                                             </p>
                                             <button
                                                  className={
                                                       classes.MoreItemButton
                                                  }
                                                  onClick={() =>
                                                       postCart({
                                                            id: "3254354345",
                                                            title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
                                                            price: 598.99,
                                                            image: "https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Ftablet.jpg?alt=media&token=4df2e18f-c88b-47b2-8d34-9d9f9875f8d1",
                                                            rating: 4,
                                                       })
                                                  }
                                             >
                                                  Add to Cart
                                             </button>
                                        </div>
                                   </div>
                                   <div className={classes.MoreItems}>
                                        <img
                                             src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fmonitor.jpg?alt=media&token=96ef7408-2182-4aae-bded-9f4ff53f03fa"
                                             alt="speaker"
                                             className={classes.MoreItemImage}
                                        />
                                        <div className={classes.MoreItemInfo}>
                                             <Link
                                                  style={{
                                                       marginBottom: "0",
                                                       textDecoration: "none",
                                                  }}
                                             >
                                                  Samsung LC49RG90SSUXEN 49'
                                                  Curved LED Gaming Monitor -
                                                  Super Ultra Wide Dual WQHD
                                                  5120 x 1440
                                             </Link>
                                             <div
                                                  className={
                                                       classes.MoreItemRating
                                                  }
                                             >
                                                  {Array(4)
                                                       .fill()
                                                       .map((_, i) => (
                                                            <p>🌟</p>
                                                       ))}
                                             </div>
                                             <p style={{ marginTop: "0" }}>
                                                  $1094.98
                                             </p>
                                             <button
                                                  className={
                                                       classes.MoreItemButton
                                                  }
                                                  onClick={() =>
                                                       postCart({
                                                            id: "4903850",
                                                            title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
                                                            price: 199.99,
                                                            image: "https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fmonitor.jpg?alt=media&token=96ef7408-2182-4aae-bded-9f4ff53f03fa",
                                                            rating: 3,
                                                       })
                                                  }
                                             >
                                                  Add to Cart
                                             </button>
                                        </div>
                                   </div>
                                   <div className={classes.MoreItems}>
                                        <img
                                             src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsw.jpg?alt=media&token=4070ccdd-84a1-4d61-96a6-f04f6198acb2"
                                             alt="speaker"
                                             className={classes.MoreItemImage}
                                        />
                                        <div className={classes.MoreItemInfo}>
                                             <Link
                                                  style={{
                                                       marginBottom: "0",
                                                       textDecoration: "none",
                                                  }}
                                             >
                                                  Kenwood kMix Stand Mixer for
                                                  Baking, Stylish Kitchen Mixer
                                                  with K-beater, Dough Hook and
                                                  Whisk, 5 Litre Glass Bowl
                                             </Link>
                                             <div
                                                  className={
                                                       classes.MoreItemRating
                                                  }
                                             >
                                                  {Array(4)
                                                       .fill()
                                                       .map((_, i) => (
                                                            <p>🌟</p>
                                                       ))}
                                             </div>
                                             <p style={{ marginTop: "0" }}>
                                                  $239.30
                                             </p>
                                             <button
                                                  className={
                                                       classes.MoreItemButton
                                                  }
                                                  onClick={() =>
                                                       postCart({
                                                            id: "49538094",
                                                            title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
                                                            price: 239.0,
                                                            image: "https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsw.jpg?alt=media&token=4070ccdd-84a1-4d61-96a6-f04f6198acb2",
                                                            rating: 4,
                                                       })
                                                  }
                                             >
                                                  Add to Cart
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )}
               </Grid>
          </Grid>
     );
};

export default Cart;

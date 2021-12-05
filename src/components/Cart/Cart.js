import React, { useEffect } from "react";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import CheckoutProduct from "./CartProduct";
import Loader from "../Loader/Loader";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import MoreItems from "./MoreItems.js";
import { useStyles } from "./CartStyles";

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


const Cart = ({
  cart,
  deleteCart,
  isloading,
  cartLoading,
  length,
  postCart,
  products,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  var randomProducts = [];
  for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random() * 100);
    randomProducts.push(products[num]);
  }
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
            <h1 style={{ marginLeft: "2%" }}>Shopping Cart</h1>
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
                Subtotal ({length} {length > 1 ? "items" : "item"}):
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
                Your shopping cart is waiting. Give it purpose – fill it with
                groceries, clothing, household supplies, electronics and more.
                Continue shopping on the Amazon.in homepage, learn about today's
                deals, or visit your Wish List.
              </p>
            </div>
          </Fade>
        )}
        <Fade>
          <div className={classes.YourItems}>
            <h1 style={{ marginBottom: "0" }}>Your items</h1>
            <AppBar position="static" color="default" className={classes.demo1}>
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
            <TabPanel className={classes.tabs} value={value} index={1}>
              No items to Buy again.
            </TabPanel>
          </div>
        </Fade>
        <Fade>
          <p className={classes.Extrainfo}>
            The price and availability of items at Amazon.in are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price. Do you have a
            promotional code? We'll ask you to enter your claim code when it's
            time to pay.
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
                  Subtotal ({length} {length > 1 ? "items" : "item"}):
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
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <Typography className={classes.heading}>
                      EMI Available
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Your order qualifies for EMI with valid credit cards (not
                      available on purchase of Gold, Jewelry, Gift cards and
                      Amazon pay balance top up). <a href="!#">Learn more</a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p>More items to Buy</p>
            {randomProducts ? (
              <MoreItems randomProducts={randomProducts} postCart={postCart} />
            ) : null}
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Cart;

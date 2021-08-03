/* eslint-disable no-unused-vars */
import React from "react";
import queryString from "query-string";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router-dom";
import amazonbg from "../../images/amazonbg.jpg";
import Zoom from "react-reveal/Zoom";

toast.configure();
function sum(cart) {
  let SUM = 0;
  cart.forEach((item) => {
    SUM += item.price;
  });
  return Math.round((SUM + Number.EPSILON) * 100) / 100;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  background: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${amazonbg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    filter: "blur(8px)",
    WebkitFilter: "blur(8px)",
  },
  card: {
    backgroundColor: "rgba(0,0,0,.4)",
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "20px",
    borderRadius: "10px",
    width: "40%",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  finalAddress: {
    fontSize: "25px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  typo: {
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}));

const Payment = ({ deleteWholeCart, postOrders, cart }) => {
  const classes = useStyles();
  const {
    country,
    fullname,
    number,
    pin,
    line1,
    line2,
    line3,
    line4,
    line5,
    line6,
  } = queryString.parse(useLocation().search);

  const history = useHistory();
  async function handleToken(token) {
    let Address = {
      country,
      fullname,
      number,
      pin,
      line2,
      line1,
      line4,
      line5,
      line3,
      line6,
    };
    const response = await axios.post("http://localhost:4000/checkout", {
      token,
      product: (Math.round((sum(cart) + Number.EPSILON) * 100) / 100) * 100,
      Address,
    });
    const { status, Charge } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      for (var i = 0; i < cart.length; i++) {
        cart[i].address = Address;
      }
      toast("Success! Check email for details", { type: "success" });
      console.log(Charge);
      await postOrders(cart);
      await deleteWholeCart();
      history.push("/cart");
    } else {
      toast("Something went wrong", { type: "error" });
      history.push("/cart");
    }
  }
  console.log("Payment Page");

  return (
    <Zoom>
      <div className={classes.root}>
        <div className={classes.background}></div>
        <div className={classes.card}>
          <Typography className={classes.typo}>Selected Address</Typography>
          <div className={classes.finalAddress}>
            {fullname}
            <p
              style={{
                marginBottom: "0",
                marginTop: "0",
              }}
            >
              {line2 && line2}
              {line1 && `,${line1}`}
              {line3 && `,${line3}`},{line4}
            </p>
            {line4},{line5},{pin}
            <Typography>{country}</Typography>
          </div>
          <StripeCheckout
            stripeKey="pk_test_51IKnzoC8IyWxRU85LCGIHqcp163lPc82rCxlx9gTrAbESUuORaRygP31Jtu862qpFe1HKRMWKHqE0a2KpxCT5ZH300B9ovPPW7"
            token={handleToken}
            amount={sum(cart) * 100}
          />
        </div>
      </div>
    </Zoom>
  );
};

export default Payment;

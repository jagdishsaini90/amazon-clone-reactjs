import React from "react";
import { Typography } from "@material-ui/core";

const AddressToolTip = ({ order }) => {
  return (
    <>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        style={{
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        {order.address.line2 && order.address.line2}
        {order.address.line1 && `,${order.address.line1}`}
        {order.address.line3 && `,${order.address.line3}`},{order.address.line4}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {order.address.line4.toUpperCase()},{order.address.line5.toUpperCase()},
        {order.address.pin}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {order.address.country}
      </Typography>
    </>
  );
};

export default AddressToolTip;

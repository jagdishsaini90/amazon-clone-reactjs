import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./CartStyles";


const AddressComponent = ({ doc, deleteAddress }) => {
  const classes = useStyles();

  return (
    <div key={doc.id} className={classes.addressData}>
      {doc.fullname}
      <p
        style={{
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        {doc.line2 && doc.line2}
        {doc.line1 && `,${doc.line1}`}
        {doc.line3 && `,${doc.line3}`},{doc.line4}
      </p>
      {doc.line4.toUpperCase()},{doc.line5.toUpperCase()},{doc.pin}
      <Typography>{doc.country}</Typography>
      <Link
        to={`/payment?country=${doc.country}&fullname=${doc.fullname}&number=${doc.number}&pin=${doc.pin}&line1=${doc.line1}&line2=${doc.line2}&line3=${doc.line3}&line4=${doc.line4}&line5=${doc.line5}&line6=${doc.line}`}
        style={{
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        <Button
          style={{
            backgroundColor: "#f0c14b",
            borderColor: "#a88734 #9c7e31 #846a29",
          }}
          className={classes.button}
        >
          Deliver to this address
        </Button>
      </Link>
      <button
        type="button"
        style={{
          marginLeft: "10px",
        }}
        onClick={() => deleteAddress(doc.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default AddressComponent;

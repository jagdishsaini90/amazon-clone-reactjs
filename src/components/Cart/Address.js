import React, { useState, useEffect } from "react";
import { Container, Typography, Button,CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddressComponent from "./AddressComponent";
import { useStyles } from "./CartStyles";

function Address({ postAddress, address, deleteAddress, isLoading }) {
  const classes = useStyles();
  const [country, setCountry] = useState("INDIA");
  const [fullname, setFullName] = useState("");
  const [number, setNumber] = useState(null);
  const [pin, setPin] = useState();
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [line4, setLine4] = useState("");
  const [line5, setLine5] = useState("Uttar Pradesh");
  const [line6, setLine6] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = async (e) => {
    if (
      fullname === "" ||
      number == null ||
      pin == null ||
      line1 === "" ||
      line2 === ""
    )
      return;
    e.preventDefault();
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var str = "";
    for (var i = 0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log("Address id: ", str);
    await postAddress({
      id: str,
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
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setFullName("");
    setLine1("");
    setLine2("");
    setLine3("");
    setLine4("");
    setLine5("");
    setLine6("");
    setNumber(null);
    setPin(null);
  };

  return (
    <>
      <div className={classes.addressTop}>
        <Link to="/">
          <img
            className={classes.headerLogo}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
            width="150px"
          />
        </Link>
      </div>
      <Typography variant="h4" className={classes.addresstypo}>
        Select a delivery address
      </Typography>
      <hr />
      {isLoading ? (
        <CircularProgress  />
      ) : (
        <>
          {" "}
          <div>
            {address.length > 0
              ? address.map((doc) => {
                  return (
                    <AddressComponent doc={doc} deleteAddress={deleteAddress} />
                  );
                })
              : null}
          </div>
          {address.length > 0 ? <hr /> : null}{" "}
        </>
      )}
      <Container className={classes.root1}>
        <div>
          <Typography variant="p" color="primary">
            Add a new Address
          </Typography>
          <form className={classes.formDiv} onSubmit={handleSubmit}>
            <label style={{ marginTop: "10px" }} className={classes.form}>
              Country/Region
            </label>
            <input
              placeholder=""
              value={country}
              disabled
              required
              className={classes.form}
              onChange={(e) => setCountry(e.target.value)}
            />
            <label style={{ marginTop: "10px" }} className={classes.form}>
              Full Name(First and Last name)
            </label>

            <input
              placeholder=""
              className={classes.form}
              value={fullname}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <label style={{ marginTop: "10px" }} className={classes.form}>
              Mobile Number
            </label>

            <input
              type="number"
              placeholder=""
              required
              className={classes.form}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label style={{ marginTop: "10px" }} className={classes.form}>
              PIN code
            </label>

            <input
              type="number"
              placeholder=""
              required
              className={classes.form}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <label style={{ marginTop: "10px" }} className={classes.form}>
              Flat, House no., Building, Company, Apartment
            </label>

            <input
              placeholder=""
              required
              className={classes.form}
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
            />
            <label style={{ marginTop: "10px" }} className={classes.form}>
              Area, Colony, Street, Sector, Village
            </label>

            <input
              placeholder=""
              required
              className={classes.form}
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
            />
            <label style={{ marginTop: "10px" }} className={classes.form}>
              Landmark
            </label>

            <input
              placeholder=""
              className={classes.form}
              value={line3}
              onChange={(e) => setLine3(e.target.value)}
            />
            <label style={{ marginTop: "10px" }} className={classes.form}>
              Town/City
            </label>

            <input
              placeholder=""
              required
              className={classes.form}
              value={line4}
              onChange={(e) => setLine4(e.target.value)}
            />
            <label style={{ marginTop: "10px" }} className={classes.form}>
              State / Province / Region
            </label>

            <input
              placeholder=""
              required
              className={classes.form}
              value={line5}
              onChange={(e) => setLine5(e.target.value)}
            />

            <Typography variant="subtitle1" className={classes.typoGraph}>
              Add delivery instructions
            </Typography>
            <Typography variant="subtitle2" className={classes.typoGraph}>
              Preferences are used to plan your delivery. However, shipments can
              sometimes arrive early or later than planned.
            </Typography>
            <label style={{ marginTop: "10px" }} className={classes.form}>
              Address Type
            </label>

            <input
              placeholder=""
              className={classes.form}
              value={line6}
              onChange={(e) => setLine6(e.target.value)}
            />
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              style={{ marginTop: "2rem", width: "200px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Address;

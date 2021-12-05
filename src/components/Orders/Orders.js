import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  TextField,
  InputAdornment,
  AppBar,
  Tab,
  Tabs,
  Box,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import OrderProductCard from "./OrderProductCard";
import { useStyles } from "./OrderStyles";
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
      {value === index && <Box p={3}>{children}</Box>}
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

const Orders = ({ orders, postCart }) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [filterdata, setFilterData] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setFilterData(
      orders.filter((doc) =>
        doc.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, orders]);

  return (
    <Container maxWidth="md" style={{ padding: "0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography className={classes.orders}>Your Orders</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
          }}
        >
          <TextField
            className={classes.textField}
            label="Search all orders"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classes.searchIcon} />
                </InputAdornment>
              ),
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <div>
        <AppBar
          position="static"
          color="default"
          style={{ boxShadow: "none", backgroundColor: "white" }}
        >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Orders" {...a11yProps(0)} className={classes.tab} />
            <Tab label="Buy again" {...a11yProps(1)} className={classes.tab} />
            <Tab
              label="Cancelled Orders"
              {...a11yProps(2)}
              className={classes.tab}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {filterdata.length > 0 ? (
            <div>
              <p style={{ fontWeight: "bold" }}>
                {filterdata.length > 1
                  ? `${filterdata.length} orders`
                  : `${filterdata.length} order`}{" "}
                placed till now
              </p>
              {filterdata
                ? filterdata.map((doc) => {
                    return (
                      <OrderProductCard
                        order={doc}
                        key={doc.id}
                        postCart={postCart}
                      />
                    );
                  })
                : "loading...."}
            </div>
          ) : (
            "0 orders placed in"
          )}
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
        <TabPanel value={value} index={2}></TabPanel>
      </div>
    </Container>
  );
};

export default Orders;

import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";
import { Hidden } from "@material-ui/core";
import { Button, Menu, MenuItem } from "@material-ui/core";
import SeachBar from "./SeachBar";
import { useStyles } from './HeaderStyles';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header({ length }) {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await logout();
    window.location.reload();
    history.push("/");
  };

  return (
    <>
      <div className={classes.header}>
        <Link to="/">
          <LocalMallIcon style={{color:"white",width:"100px"}} fontSize="100px" />
        </Link>

        <Hidden only={["xs"]}>
          <SeachBar />
        </Hidden>

        <div className={classes.headerNav}>
          <div className={classes.headerOptions}>
            <span className={classes.optionLine1}>Hello</span>
            <span className={classes.optionLine2}>
              {currentUser ? (
                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    style={{
                      color: "white",
                      padding: "0",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {currentUser.displayName}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Sign In
                </Link>
              )}
            </span>
          </div>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <div className={classes.headerOptions}>
              <span className={classes.optionLine1}>Returns</span>
              <span className={classes.optionLine2}>& Orders</span>
            </div>
          </Link>

          <div className={classes.headerOptions}>
            <span className={classes.optionLine1}>Your</span>
            <span className={classes.optionLine2}>Prime</span>
          </div>

          <Link to="/cart">
            <div className={classes.headerBasket}>
              <ShoppingCartIcon />
              <span className={classes.basketCount && classes.optionLine2}>
                {length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <SeachBar />
      </Hidden>
    </>
  );
}

export default Header;

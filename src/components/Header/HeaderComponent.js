import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link,useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
     header: {
          height: "60px",
          width: " 100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#131921",
          position: "sticky",
          top: "0",
          zIndex: "100",
          [theme.breakpoints.down("xs")]: {
               justifyContent: "space-between",
          },
     },
     headerLogo: {
          width: "100px",
          objectFit: "contain",
          margin: " 0 20px",
          marginTop: "18px",
          [theme.breakpoints.down("xs")]: {
               width: 60,
               height: 60,
               marginTop: "14px",
          },
     },
     headerSearch: {
          display: "flex",
          flex: "1",
          alignItems: "center",
          borderRadius: "24px",
     },
     searchInput: {
          height: "12px",
          padding: "10px",
          border: "none",
          width: "100%",
          borderRadius: '5px 0 0 5px',
          [theme.breakpoints.down("xs")]: {
              borderRadius:'0'
          },
     },
     searchIcon: {
          padding: "5px",
          height: "22px !important",
          backgroundColor: "#cd9042",
          borderRadius: '0 5px 5px 0',
          [theme.breakpoints.down("xs")]: {
              borderRadius:'0'
          },
     },
     headerNav: {
          display: "flex",
          justifyContent: "space-evenly",
     },
     headerOptions: {
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
          marginRight: "10px",
          color: "white",
     },
     optionLine1: {
          fontSize: "10px",
          [theme.breakpoints.down("xs")]: {
               fontSize: "7px",
          },
     },
     optionLine2: {
          fontSize: "13px",
          fontWeight: "800",
          [theme.breakpoints.down("xs")]: {
               fontSize: "10px",
          },
     },
     headerBasket: {
          display: "flex",
          alignItems: "center",
          color: "white",
          marginRight: "1rem",
          [theme.breakpoints.down("xs")]: {
               marginLeft: "auto",
               marginRight: "10px",
          },
     },
     basketCount: {
          marginLeft: "10px",
          marginRight: "10px",
     },
}));

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
          history.push("/")
     }
     return (
          <>
               <div className={classes.header}>
                    <Link to="/">
                         <img
                              className={classes.headerLogo}
                              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                              alt="amazon"
                         />
                    </Link>

                    <Hidden only={["xs"]}>
                         <div className={classes.headerSearch}>
                              <input
                                   className={classes.searchInput}
                                   type="text"
                              />
                              <SearchIcon className={classes.searchIcon} />
                         </div>
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
                                                  style={{color:'white',padding:'0',fontSize:'10px',fontWeight:'bold'}}
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
                                                  <MenuItem
                                                       onClick={handleLogout}
                                                  >
                                                       Logout
                                                  </MenuItem>
                                             </Menu>
                                        </div>
                                   ) : (
                                        <Link to="/login" style={{textDecoration:'none',color:'white'}}>Sign In</Link>
                                   )}
                              </span>
                         </div>
                         <Link to="/orders" style={{textDecoration:'none'}}>
                              <div className={classes.headerOptions}>
                                   <span className={classes.optionLine1}>
                                        Returns
                                   </span>
                                   <span className={classes.optionLine2}>
                                        & Orders
                                   </span>
                              </div>
                         </Link>

                         <div className={classes.headerOptions}>
                              <span className={classes.optionLine1}>Your</span>
                              <span className={classes.optionLine2}>Prime</span>
                         </div>

                         <Link to="/cart">
                              <div className={classes.headerBasket}>
                                   <ShoppingCartIcon />
                                   <span
                                        className={
                                             classes.basketCount &&
                                             classes.optionLine2
                                        }
                                   >
                                        {length}
                                   </span>
                              </div>
                         </Link>
                    </div>
               </div>
               <Hidden only={["sm", "md", "lg", "xl"]}>
                    <div
                         className={classes.headerSearch}
                         style={{ width: "100%" }}
                    >
                         <input className={classes.searchInput} type="text" />
                         <SearchIcon className={classes.searchIcon} />
                    </div>
               </Hidden>
          </>
     );
}

export default Header;

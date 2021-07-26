import React from "react";
import {
     Button,
     MenuItem,
     Paper,
     ClickAwayListener,
     Grow,
     Popper,
     MenuList,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
     headerSearch: {
          display: "flex",
          flex: "1",
          alignItems: "center",
          borderRadius: "24px",
          width: "100%",
     },
     searchInput: {
          height: "12px",
          padding: "10px",
          border: "none",
          width: "100%",
          [theme.breakpoints.down("xs")]: {
               borderRadius: "0",
          },
     },
     searchIcon: {
          padding: "5px",
          height: "22px !important",
          backgroundColor: "#cd9042",
          borderRadius: "0 5px 5px 0",
          [theme.breakpoints.down("xs")]: {
               borderRadius: "0",
          },
     },
}));
const SeachBar = () => {
     const classes = useStyles();
     const [open, setOpen] = React.useState(false);
     const anchorRef = React.useRef(null);

     const handleToggle = () => {
          setOpen((prevOpen) => !prevOpen);
     };

     const handleMenuClose = (event) => {
          if (anchorRef.current && anchorRef.current.contains(event.target)) {
               return;
          }

          setOpen(false);
     };

     function handleListKeyDown(event) {
          if (event.key === "Tab") {
               event.preventDefault();
               setOpen(false);
          }
     }

     return (
          <div className={classes.headerSearch} style={{ width: "100%" }}>
               <Button
                    ref={anchorRef}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{
                         color: "black",
                         fontWeight: "bold",
                         backgroundColor: "rgb(223, 219, 219)",
                         padding: "5px",
                         zIndex: "20",
                    }}
               >
                    All <ExpandMoreIcon style={{ width: "20px" }} />
               </Button>
               <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    style={{ zIndex: "1000" }}
               >
                    {({ TransitionProps, placement }) => (
                         <Grow
                              {...TransitionProps}
                              style={{
                                   transformOrigin:
                                        placement === "bottom"
                                             ? "center top"
                                             : "center bottom",
                              }}
                         >
                              <Paper>
                                   <ClickAwayListener
                                        onClickAway={handleMenuClose}
                                   >
                                        <MenuList
                                             autoFocusItem={open}
                                             id="menu-list-grow"
                                             onKeyDown={handleListKeyDown}
                                        >
                                             <MenuItem>
                                                  <Link
                                                       to={"/books"}
                                                       style={{
                                                            textDecoration:
                                                                 "none",
                                                            color: "black",
                                                       }}
                                                       onClick={handleMenuClose}
                                                  >
                                                       Books
                                                  </Link>
                                             </MenuItem>
                                             <MenuItem>
                                                  <Link
                                                       to={"/games"}
                                                       style={{
                                                            textDecoration:
                                                                 "none",
                                                            color: "black",
                                                       }}
                                                       onClick={handleMenuClose}
                                                  >
                                                       Games
                                                  </Link>
                                             </MenuItem>
                                             <MenuItem>
                                                  <Link
                                                       to={"/ebooks"}
                                                       style={{
                                                            textDecoration:
                                                                 "none",
                                                            color: "black",
                                                       }}
                                                       onClick={handleMenuClose}
                                                  >
                                                       eBooks
                                                  </Link>
                                             </MenuItem>
                                        </MenuList>
                                   </ClickAwayListener>
                              </Paper>
                         </Grow>
                    )}
               </Popper>
               <input className={classes.searchInput} type="text" />
               <SearchIcon className={classes.searchIcon} />
          </div>
     );
};

export default SeachBar;

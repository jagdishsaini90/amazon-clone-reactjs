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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from './HeaderStyles';


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
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleMenuClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem>
                    <Link
                      to={"/books"}
                      className={classes.link}
                      onClick={handleMenuClose}
                    >
                      Books
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"/games"}
                      className={classes.link}
                      onClick={handleMenuClose}
                    >
                      Games
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"/ebooks"}
                      className={classes.link}
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

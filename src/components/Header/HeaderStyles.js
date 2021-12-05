import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

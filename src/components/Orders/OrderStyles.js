import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    border: "1px solid black",
    fontSize: "13px",
    width: "100%",
    overflow: "hidden",
    marginBottom: "1rem",
  },
  buttons: {
    marginRight: "1rem",
    maxWidth: "250px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "25px",
    },
  },
  button: {
    backgroundColor: "rgb(235, 233, 233)",
    fontSize: "12px",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 100,
      fontSize: "6px",
      padding: 2,
    },
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      fontSize: "7px",
    },
  },
  mainItem1: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "7px",
    backgroundColor: "rgb(235, 233, 233)",
    borderBottom: "1px solid black",
  },
  mainItem2: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    padding: "5px",
  },
  orderDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  product: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  productImage: {
    width: 100,
    height: 120,
    [theme.breakpoints.down("xs")]: {
      width: 50,
      height: 55,
    },
  },
  productDetails: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "7px",
      maxWidth: "120px",
    },
  },
  addressData: {
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  heading: {
    marginTop: "3rem",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "17px",
    },
  },
  fontType1: {
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      maxWidth: "300px",
      marginTop: "10px",
    },
  },
  fontType2: {
    fontSize: "13px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      maxWidth: "300px",
      padding: "0",
    },
  },
  input: {
    display: "none",
  },
  button1: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  ratingBox: {
    paddingLeft: "0",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0",
    },
  },
  addPhoto: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  showImage: {
    maxWidth: "200px",
    maxHeight: "200px",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "250px",
      maxHeight: "250px",
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    fontSize: "15px",
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  breadcrumbs: {
    fontSize: "13px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      marginLeft: "10px",
    },
  },
  searchButton: {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      padding: "5px",
      marginRight: "5px",
    },
  },
  orders: {
    fontSize: "29px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      marginLeft: "10px",
    },
  },
  textField: {
    [theme.breakpoints.down("xs")]: {
      width: 150,
      fontSize: "8px",
      marginRight: "10px",
    },
  },
  searchIcon: {
    [theme.breakpoints.down("xs")]: {
      width: 20,
      height: 20,
    },
  },
}));

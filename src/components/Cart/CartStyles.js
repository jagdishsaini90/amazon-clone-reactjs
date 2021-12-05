import { makeStyles } from "@material-ui/core/styles";
import amazonbg from "../../images/amazonbg.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  background: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${amazonbg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    filter: "blur(8px)",
    WebkitFilter: "blur(8px)",
  },
  card: {
    backgroundColor: "rgba(0,0,0,.4)",
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "20px",
    borderRadius: "10px",
    width: "40%",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  finalAddress: {
    fontSize: "25px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  typo: {
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  More: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
    },
  },
  MoreItems: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    padding: "5px",
    borderRadius: "10px",
    borderBottom: "1px solid grey",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  MoreItemImage: {
    width: "100px",
    height: "100px",
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "60px",
      height: "60px",
    },
  },
  MoreItemInfo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    marginBottom: "0",
  },
  MoreItemButton: {
    backgroundColor: "#FFD814",
    borderColor: "#a88734 #9c7e31 #846a29",
    border: ".5px solid black",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: "7px",
    },
  },
  MoreItemRating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "0",
    marginTop: "0",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  gridArea: {
    backgroundColor: "#EAEDED",
    padding: "20px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      padding: "5px",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  gridCartArea: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  demo1: {
    backgroundColor: "white",
    boxShadow: "none",
  },
  EmptyCart: {
    width: "95%",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: "80%",
    },
  },
  YourItems: {
    width: "95%",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: "80%",
    },
  },
  tabs: {
    fontSize: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      padding: "0",
      paddingLeft: "10px",
    },
  },
  Extrainfo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      maxWidth: "90%",
    },
  },
  shoppingCart: {
    backgroundColor: "white",
    minWidth: "100%",
    borderRadius: "10px",
    marginBottom: "1rem",
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      minWidth: "90%",
    },
  },
  sideBar: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  Payment: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "10px",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      fontSize: "12px",
      maxWidth: "80%",
      textAlign: "center",
    },
  },
  root1: {
    width: "100%",
    marginBottom: "10rem",
  },
  addressTop: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  addresstypo: {
    marginBottom: "1rem",
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  form: {
    fontSize: "20px",
    width: "350px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: "200px",
    },
  },
  formDiv: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  button: {
    fontSize: "14px",
    backgroundColor: "skyblue",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      backgroundColor: "rgb(221, 221, 221)",
    },
  },
  typoGraph: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
   addressData: {
    marginBottom: "1rem",
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}));

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Mainproduct: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
    minWidth: "250px",
    backgroundColor: "white",
    zIndex: "1",
    borderRadius: "10px",
    margin: "1rem 1rem 1rem 0",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "390px",
      maxHeight: "150px",
      minHeight: "0",
      flexDirection: "row",
      borderRadius: "5px",
      padding: "10px",
      margin: "5px",
    },
  },
  Image: {
    maxHeight: "120px",
    width: " 100%",
    objectFit: "contain",
    marginBottom: "15px",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "200px",
      minHeight: "200px",
      maxWidth: "100px",
    },
  },
  productInfo: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    fontSize: "15px",
    marginBottom: "15px",
    maxWidth: "300px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      minWidth: "200px",
    },
  },
  Rating: {
    display: "flex",
    margin: "0",
  },

  ratingIcon: {
    width: "20px",
    color: "#C7511F",
  },
  button: {
    cursor: "pointer",
    fontSize: "11px",
    backgroundColor: "#FFD814",
    borderColor: "#a88734 #9c7e31 #846a29",
    [theme.breakpoints.down("xs")]: {
      fontSize: "6px",
    },
  },
  price: {
    marginTop: "3px",
  },
  typo: {
    maxWidth: "200px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      maxWidth: "200px",
    },
  },
}));

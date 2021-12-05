import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
     login: {
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.down("xs")]: {},
     },
     loginLogo: {
          marginTop: "20px",
          marginBottom: "20px",
          objectFit: "contain",
          width: "100px",
          marginRight: "auto",
          marginLeft: "auto",
     },
     loginContainer: {
          width: "300px",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          border: "1px solid lightgray",
          padding: "20px",
     },
     loginButton: {
          background: "#f0c14b",
          borderRadius: "2px",
          width: "100%",
          height: "30px",
          border: "1px solid",
          marginTop: "10px",
          borderColor: "#a88734 #9c7e31 #846a29",
          cursor: "pointer",
     },
     registerButton: {
          borderRadius: "2px",
          width: "100%",
          height: "30px",
          border: "1px solid",
          marginTop: "10px",
          borderColor: "darkgray",
          fontWeight: "bold",
     },
     input: {
          height: "30px",
          marginBottom: "10px",
          backgroundColor: "white",
          width: "98%",
          fontWeight: "bold",
          borderColor: '#a88734 #9c7e31 #846a29',
          borderRadius : '5px',
          [theme.breakpoints.down("xs")]: {
               height: "30px",
          },
     },
     SignIn: {
          marginBottom: "0",
          [theme.breakpoints.down("xs")]: {
               fontSize: "20px",
          },
     },
     para: {
          [theme.breakpoints.down("xs")]: {
               fontSize: "10px",
          },
     },
}));
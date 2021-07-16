import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
     login: {
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.down('xs')]: {
          }
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
     },
     input: {
          height: "30px",
          marginBottom: "10px",
          backgroundColor: "white",
          width: "98%",
          [theme.breakpoints.down('xs')]: {
               height : '20px'
          }
     },
     SignIn: {
          marginBottom: "0",
          [theme.breakpoints.down('xs')]: {
               fontSize : '20px'
          }
     },
     para: {
          [theme.breakpoints.down('xs')]: {
               fontSize : '10px'
          }
     }
}));
function Login() {
     const classes = useStyles();
     const history = useHistory();
     const { login } = useAuth();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const signIn = async (e) => {
          e.preventDefault();

          await login(email, password);
          history.push("/");
     };

     return (
          <div className={classes.login}>
               <Link to="/">
                    <img
                         className={classes.loginLogo}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                         alt="logo"
                    />
               </Link>

               <div className={classes.loginContainer}>
                    <h1 className={classes.SignIn}>Sign-in</h1>

                    <form>
                         <h5 style={{marginBottom :'5px'}}>E-mail</h5>
                         <input
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className={classes.input}
                         />

                         <h5 style={{marginBottom :'5px'}}>Password</h5>
                         <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className={classes.input}
                         />

                         <button
                              type="submit"
                              onClick={signIn}
                              className={classes.loginButton}
                         >
                              Sign In
                         </button>
                    </form>

                    <p className={classes.para}>
                         By signing-in you agree to the AMAZON FAKE CLONE
                         Conditions of Use & Sale. Please see our Privacy
                         Notice, our Cookies Notice and our Interest-Based Ads
                         Notice.
                    </p>

                    <button className={classes.registerButton}>
                         <Link
                              to="/signup"
                              style={{
                                   color: "rgb(63, 63, 63)",
                                   textDecoration: "none",
                              }}
                         >
                              Create your Amazon Account
                         </Link>
                    </button>
               </div>
          </div>
     );
}

export default Login;
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./AuthStyles";


function Login() {
     const classes = useStyles();
     const history = useHistory();
     const { login } = useAuth();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(false);


     const signIn = async (e) => {
          e.preventDefault();
          if (email === "" || password === "") {
               setError("Please Enter a valid email or password");
               return;
          }
          setLoading(true);
          await login(email, password);
          history.push("/");
          window.location.reload();
          setLoading(false);
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
                    {error && (
                         <Alert variant="outlined" severity="error">
                              {error}
                         </Alert>
                    )}
                    <div className={classes.loginContainer}>
                         <h1 className={classes.SignIn}>Sign-in</h1>

                         <form>
                              <h5 style={{ marginBottom: "5px" }}>E-mail</h5>
                              <input
                                   type="text"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   className={classes.input}
                              />

                              <h5 style={{ marginBottom: "5px" }}>Password</h5>
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
                                   {loading ? (
                                        <CircularProgress size={20} />
                                   ) : (
                                        "Sign In"
                                   )}
                              </button>
                         </form>

                         <p className={classes.para}>
                              By signing-in you agree to the AMAZON FAKE CLONE
                              Conditions of Use & Sale. Please see our Privacy
                              Notice, our Cookies Notice and our Interest-Based
                              Ads Notice.
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

export default (Login);

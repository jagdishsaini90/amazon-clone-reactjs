import React, { useState } from "react";
import "./Signup.css";
import { useAuth } from "../../firebase/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from '@material-ui/core/CircularProgress';



function Signup() {
     const history = useHistory();
     const { signup } = useAuth();
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [phonenumber, setPhoneNumber] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(false);

     const register = async (e) => {
          e.preventDefault();
          if (
               email === "" ||
               password === "" ||
               phonenumber === null ||
               name === ""
          ) {
               setError("Please Enter necessary Details");
               return;
          }
          setLoading(true)
          await signup(email, password, name, phonenumber);
          setLoading(false)
          history.push("/login");
     };
     console.log("Signup Page")

     return (
          <Fade>
               <div className="login">
                    <Link to="/">
                         <img
                              className="login__logo"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                              alt="logo"
                         />
                    </Link>
                    {error && <Alert severity="error">{error}</Alert>}
                    <div className="login__container">
                         <h1 style={{ marginBottom: "0" }}>Create Account</h1>

                         <form>
                              <h5>Your name</h5>
                              <input
                                   type="text"
                                   value={name}
                                   required
                                   className="input"
                                   onChange={(e) => setName(e.target.value)}
                              />
                              <div style={{ marginTop: "0" }}>
                                   <h5 style={{ marginBottom: "2px" }}>
                                        Mobile number
                                   </h5>
                                   <div className="phone">
                                        <input
                                             type="text"
                                             value="IN +91"
                                             style={{
                                                  width: "25%",
                                                  marginRight: "1rem",
                                                  padding: "9px",
                                                  border: "2px solid grey",
                                                  fontWeight: "bold",
                                             }}
                                        />
                                        <input
                                             type="number"
                                             value={phonenumber}
                                             onChange={(e) =>
                                                  setPhoneNumber(e.target.value)
                                             }
                                             style={{
                                                  padding: "9px",
                                                  border: "2px solid grey",
                                             }}
                                             required
                                        />
                                   </div>
                              </div>
                              <h5>E-mail</h5>
                              <input
                                   type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                              />

                              <h5 style={{ marginTop: "0" }}>Password</h5>
                              <input
                                   type="password"
                                   placeholder="At least 6 Characters"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   required
                              />

                              <p style={{ fontSize: "13px" }}>
                                   We will send you a text to verify your phone.
                                   Message and Data rates may apply.
                              </p>
                              <button
                                   type="submit"
                                   onClick={register}
                                   className="login__signInButton"
                              >
                                   {loading ? <CircularProgress size={20} /> : "Continue"}
                              </button>
                         </form>
                         <div style={{ fontSize: "13px" }}>
                              <p style={{ marginBottom: "0" }}>
                                   Already have an account?{" "}
                                   <Link to="/login">Sign in</Link>
                              </p>
                              <p style={{ marginTop: "0" }}>
                                   Buying for work?
                                   <Link> Create a free business account</Link>
                              </p>
                         </div>
                    </div>
               </div>
          </Fade>
     );
}

export default Signup;

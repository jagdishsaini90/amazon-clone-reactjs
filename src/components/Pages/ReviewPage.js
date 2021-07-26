import React, { useState } from "react";
import { Avatar, Button, Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { useAuth } from "../../firebase/AuthProvider";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
     reviewImage: {
          width: "100px",
          height: "100px",
          [theme.breakpoints.down("xs")]: {
               width: "100px",
               height: "100px",
          },
     },
     Review: {
          maxWidth: "200px",
     },
}));

const ReviewPage = ({ doc, key, productId }) => {
     const classes = useStyles();
     const { currentUser } = useAuth();
     const [error, setError] = useState(null);
     const history = useHistory();

     const handleHelpful = async (id) => {
          if (!currentUser) {
               history.push("/login");
               return;
          }

          await firebase
               .firestore()
               .doc(`products/${productId}`)
               .get()
               .then((data) => {
                    return data.data().review;
               })
               .then((res) => {
                    let list = res;
                    console.log(res);
                    for (var i = 0; i < res.length; i++) {
                         console.log(list[i].helpful);
                         if (list[i].id === id) {
                              let helpful = list[i].helpful;
                              for (var j = 0; j < helpful.length; i++) {
                                   if (helpful[i] === currentUser.uid) {
                                        setError(
                                             "You already pointed out this"
                                        );
                                        return;
                                   }
                              }
                              list[i].helpful.push(currentUser.uid);
                              firebase
                                   .firestore()
                                   .collection("products")
                                   .doc(productId)
                                   .update({
                                        review: list,
                                   })
                                   .catch((error) => setError(error.message));
                              window.location.reload();
                              break;
                         }
                    }
               });
     };
     return (
          <>
               <div key={key}>
                    <div
                         style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                         }}
                    >
                         <Avatar
                              style={{
                                   marginRight: "10px",
                              }}
                         />
                         {doc.name}
                    </div>
                    <Box
                         component="fieldset"
                         borderColor="transparent"
                         style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              padding: "0",
                         }}
                    >
                         <Rating
                              name="read-only"
                              value={doc.rating}
                              readOnly
                              style={{
                                   marginRight: "10px",
                              }}
                         />
                         <p
                              style={{
                                   color: "#c45500",
                                   fontWeight: "bold",
                              }}
                         >
                              Verified Purchase
                         </p>
                    </Box>
                    {doc.image ? (
                         <div className={classes.reviewImage}>
                              <img
                                   src={doc.image.imgUrl}
                                   alt=""
                                   width="100%"
                                   height="100%"
                              />
                         </div>
                    ) : null}
                    <Typography
                         style={{
                              fontWeight: "bold",
                         }}
                    >
                         {doc.headline}
                    </Typography>
                    <Typography
                         className={classes.Review}
                         style={{
                              width: "200px",
                         }}
                         noWrap
                    >
                         {doc.review}
                    </Typography>
                    {doc.helpful && (
                         <p
                              style={{
                                   color: "grey",
                                   fontSize: "10px",
                                   marginBottom: "0",
                                   display: "flex",
                                   justifyContent: "flex-start",
                                   flexDirection: "row",
                                   alignItems: "center",
                              }}
                         >
                              {doc.helpful.length} find it helpful{" "}
                              {error && (
                                   <p
                                        style={{
                                             fontSize: "10px",
                                             color: "red",
                                        }}
                                   >
                                        {" "}
                                        !{error}
                                   </p>
                              )}
                         </p>
                    )}
                    <Button
                         variant="contained"
                         style={{
                              marginTop: "10px",
                              fontWeight: "bold",
                         }}
                         onClick={handleHelpful}
                    >
                         Helpful
                    </Button>
                    <hr />
               </div>
          </>
     );
};

export default ReviewPage;

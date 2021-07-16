import React, { useEffect } from "react";
import { Container, Typography, Button, Avatar, Box } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Loader from "../Loader/Loader";
import { useHistory } from "react-router-dom";
import Header from "../Header/HeaderComponent";

const useStyles = makeStyles((theme) => ({
     MainProduct: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          padding: "20px",
          [theme.breakpoints.down("xs")]: {
               flexDirection: "column",
          },
     },
     Image: {
          marginRight: "2rem",
          overflow:'hidden',
          [theme.breakpoints.down("xs")]: {
               width: "80%",
               borderRadius: "5px",
               marginRight: "0",
               height : '80%'
          },
     },
     title: {
          fontWeight: "bold",
          [theme.breakpoints.down("xs")]: {
               fontSize: "25px",
               marginTop: "1rem",
          },
     },
     button: {
          cursor: "pointer",
          fontSize: "11px",
          backgroundColor: "#FFD814",
          borderColor: "#a88734 #9c7e31 #846a29",
          fontWeight: "bold",
          [theme.breakpoints.down("xs")]: {
               fontSize: "10px",
               width: "100%",
          },
     },
     description: {
          [theme.breakpoints.down("xs")]: {
               fontSize: "14px",
               marginBottom: "1.5rem",
          },
     },
}));
const ProductContent = ({ product, isloading, postCart, length }) => {
     const classes = useStyles();
     const history = useHistory();


     useEffect(() => {
          window.scrollTo({
               top: 0,
               left: 0,
               behavior: "smooth",
          });
     }, []);

     if (isloading) {
          return <Loader />;
     }
     const handlePost = async () => {
          await postCart({
               id: product[0]._id,
               title: product[0].title,
               price: product[0].price,
               image: product[0].filename,
               rating: product[0].rating,
          });
          history.push("/cart");
     };

     return (
          <>
               <Header length={length} />
               <Container maxWidth="md" style={{ marginBottom: "4rem" }}>
                    <div className={classes.MainProduct}>
                         <div className={classes.Image}>
                              <img
                                   src={product[0].filename}
                                   alt={product[0].title}
                                   width="100%"
                                   height="100%"
                              />
                         </div>
                         <div>
                              <Typography
                                   className={classes.title}
                                   variant="h3"
                              >
                                   {product[0].title}
                              </Typography>
                              <div>
                                   {Array(product[0].rating)
                                        .fill()
                                        .map((_, i) => (
                                             <StarIcon
                                                  style={{ color: "orange" }}
                                             />
                                        ))}
                              </div>
                              <Typography style={{ fontWeight: "bold" }}>
                                   Price : ${product[0].price}
                              </Typography>
                              <Typography className={classes.description}>
                                   {product[0].description}
                              </Typography>
                              <Button
                                   className={classes.button}
                                   onClick={handlePost}
                              >
                                   Add to Cart
                              </Button>
                         </div>
                    </div>
                    <hr />
                    <div>
                         {product[0].review ? (
                              <div>
                                   <h3>Reviews({product[0].review.length})</h3>
                                   {product[0].review.map((doc) => {
                                        return (
                                             <div>
                                                  <div
                                                       style={{
                                                            display: "flex",
                                                            flexDirection:
                                                                 "row",
                                                            justifyContent:
                                                                 "flex-start",
                                                            alignItems:
                                                                 "center",
                                                       }}
                                                  >
                                                       <Avatar
                                                            style={{
                                                                 marginRight:
                                                                      "10px",
                                                            }}
                                                       />
                                                       {doc.name}
                                                  </div>
                                                  <Box
                                                       component="fieldset"
                                                       borderColor="transparent"
                                                       style={{
                                                            display: "flex",
                                                            flexDirection:
                                                                 "row",
                                                            justifyContent:
                                                                 "flex-start",
                                                            alignItems:
                                                                 "center",
                                                            padding: "0",
                                                       }}
                                                  >
                                                       <Rating
                                                            name="read-only"
                                                            value={doc.rating}
                                                            readOnly
                                                            style={{
                                                                 marginRight:
                                                                      "10px",
                                                            }}
                                                       />
                                                       <p
                                                            style={{
                                                                 color: "#c45500",
                                                                 fontWeight:
                                                                      "bold",
                                                            }}
                                                       >
                                                            Verified Purchase
                                                       </p>
                                                  </Box>
                                                  <Typography
                                                       style={{
                                                            fontWeight: "bold",
                                                       }}
                                                  >
                                                       {doc.headline}
                                                  </Typography>
                                                  <Typography>
                                                       {doc.review}
                                                  </Typography>
                                                  <Button
                                                       variant="contained"
                                                       style={{
                                                            marginTop: "10px",
                                                            fontWeight: "bold",
                                                       }}
                                                  >
                                                       Helpful
                                                  </Button>
                                                  <hr />
                                             </div>
                                        );
                                   })}
                              </div>
                         ) : (
                              `0 reviews for this ${product[0].title} `
                         )}
                    </div>
               </Container>
          </>
     );
};
export default ProductContent;

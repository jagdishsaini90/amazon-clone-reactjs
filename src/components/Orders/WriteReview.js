import React, { useState, useEffect, memo } from "react";
import queryString from "query-string";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Avatar,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import firebase from "firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";
import Alert from "@material-ui/lab/Alert";
import { useAuth } from "../../firebase/AuthProvider";
// import { firestore } from "../../firebase/firebase";
var randomID = require("crypto").randomBytes(10).toString("hex");

toast.configure();
const useStyles = makeStyles((theme) => ({
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
  button: {
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
}));

const WriteReview = ({ WriteProductReview }) => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useAuth();
  const [rating, setRating] = useState(0);
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [headline, setHeadLine] = useState("");
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = queryString.parse(useLocation().search);

  const handleFireBaseUpload = React.useCallback(
    (e) => {
      e.preventDefault();
      if (imageAsFile === "") {
        setError(`not an image, the image file is a ${typeof imageAsFile}`);
        return;
      }
      setImageLoading(true);
      const storage = firebase.storage();
      const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      uploadTask.on(
        "state_changed",
        (snapShot) => {},
        (err) => {
          setError(err.message);
        },
        () => {
          storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setImageAsUrl((prevObject) => ({
                ...prevObject,
                imgUrl: fireBaseUrl,
              }));
              setImageLoading(false);
            });
        }
      );
    },
    [imageAsFile]
  );

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || headline === "" || review === "" || rating === 0) {
      setError("Please Enter Required Details");
      return;
    }
    let doc = {
      id,
      reviewId: randomID,
      rating,
      image: imageAsUrl,
      headline,
      review,
      name,
      uid: currentUser.uid,
      helpful: [],
      report: [],
    };
    console.log(randomID);
    const res = await WriteProductReview(doc);
    if (!res) {
      toast("Successfully reviewed :) ", { type: "success" });
      history.push(`/product/${id}`);
    } else {
      toast("Sorry Unable to review :) ", { type: "error" });
      history.push("/");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // useEffect(() => {
  //      firestore.collection('products').doc(id).get()
  //           .then(snapshot => {
  //                if(snapshot.data().review)
  //                     return snapshot.data().review
  //           })
  //           .then(list => {
  //                for (var i = 0; i < list.length; i++) {
  //                     if (list[i].uid === currentUser.uid) {
  //                          setRating(list[i].rating)
  //                          setHeadLine(list[i].headline)
  //                          setReview(list[i].review)
  //                          setName(list[i].name)
  //                          setImageAsUrl(list[i].image.imgUrl);
  //                          break;
  //                     }
  //                }
  //      })
  // }, [currentUser.uid,id]);
  console.log("Review Write Page");

  return (
    <>
      <Container maxWidth="md" style={{ marginBottom: "5rem" }}>
        <Typography variant="h5" className={classes.heading}>
          Create Review
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <hr style={{ color: "GrayText" }} />
        <form onSubmit={handleReviewSubmit}>
          <div className={classes.fontType1}>
            <div>
              <Typography className={classes.fontType1}>
                Overall rating
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                className={classes.ratingBox}
              >
                <Rating
                  name="simple-controlled"
                  value={rating}
                  style={{ paddingLeft: "0" }}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </Box>
            </div>
          </div>
          <hr style={{ color: "GrayText" }} />
          <div className={classes.addPhoto}>
            <Typography className={classes.fontType1}>Add a photo</Typography>
            <Typography
              className={classes.fontType2}
              variant="subtitle2"
              color="textSecondary"
            >
              Shoppers find images and videos more helpful than text alone.
            </Typography>
            <div>
              <div
                onSubmit={handleFireBaseUpload}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <input type="file" onChange={handleImageAsFile} />
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  type="submit"
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                  onClick={handleFireBaseUpload}
                  disabled={!imageAsFile}
                >
                  {imageLoading ? (
                    <CircularProgress
                      size={20}
                      style={{
                        padding: "5px 20px 5px 20px",
                      }}
                    />
                  ) : (
                    <Typography
                      style={{
                        margin: "0",
                        padding: "5px",
                        display: "flex",
                      }}
                      className={classes.fontType2}
                    >
                      <PhotoCamera
                        style={{
                          width: "20px",
                        }}
                      />{" "}
                      Upload Image
                    </Typography>
                  )}
                </Button>
              </div>
              {imageAsFile ? (
                <div className={classes.showImage}>
                  <img
                    src={imageAsUrl.imgUrl}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
              ) : null}
            </div>
          </div>
          <hr style={{ color: "GrayText" }} />
          <div>
            <div>
              <Typography className={classes.fontType1}>
                Add a headline
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                type="text"
                fullWidth
                required
                label="What's most important to know?"
                value={headline}
                onChange={(e) => setHeadLine(e.target.value)}
              />
            </div>
            <div>
              <Typography className={classes.fontType1}>
                Add a written review
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                type="text"
                label="What do you like or dislike"
                value={review}
                required
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <div>
              <Typography className={classes.fontType1}>
                Choose your public name
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <Typography
                className={classes.fontType2}
                variant="subtitle2"
                color="textSecondary"
              >
                This is how you'll appear to other customers
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Avatar src="/broken-image.jpg" />
                <TextField
                  fullWidth
                  type="text"
                  label="What do you like or dislike"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <Typography
                className={classes.fontType2}
                variant="subtitle2"
                color="textSecondary"
                style={{ marginBottom: "2rem" }}
              >
                Don’t worry, you can always change this on your profile
              </Typography>
            </div>
          </div>
          <hr style={{ color: "GrayText" }} />
          <Button variant="outlined" onClick={handleReviewSubmit}>
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default memo(WriteReview);

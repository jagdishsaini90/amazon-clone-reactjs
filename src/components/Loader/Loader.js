import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  loader: {
    background: "#f0c14b",
  },
}));

export default function Loader() {
  const classes = useStyles();
  console.log("Loader Page");

  return (
    <div className={classes.root}>
      <LinearProgress className={classes.loader} />
    </div>
  );
}

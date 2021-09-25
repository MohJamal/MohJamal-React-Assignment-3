import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Users.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    paddingTop: "24px",
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
});

const Users = (props) => {
  const classes = useStyles();

  return (
    <div className="Users">
      {props.usersData.map((user) => {
        let userTitle =
          user.title.charAt(0).toUpperCase() +
          user.title.slice(1, user.title.length) +
          ".";

        return (
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={user.picture}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {userTitle + " " + user.firstName + " " + user.lastName}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Users;

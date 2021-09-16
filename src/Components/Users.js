import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Users.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
          <Card className={classes.root} variant="outlined" key={user.id}>
            <CardContent>
              <Typography variant="h5" component="h2">
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

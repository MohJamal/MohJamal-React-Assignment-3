import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Articles.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    "& h2": {
      fontWeight: "bold",
      fontSize: "1.3rem",
      marginBottom: "10px",
    },
  },
});

const Articles = (props) => {
  const classes = useStyles();
  return (
    <div className="Articles">
      {props.articlesData.map((article) => {
        return (
          <Card className={classes.root} variant="outlined" key={article.id}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {article.title}
              </Typography>

              <Typography variant="body2" component="p">
                {article.body}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Articles;

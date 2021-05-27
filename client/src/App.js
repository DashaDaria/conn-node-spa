import React from "react";
import { TopNav, Container } from "./components"
import { Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  }
});

export const App = () => {
  const classes = useStyles()
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <TopNav />
      <Container>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              { data ? data : "Loading ..."}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

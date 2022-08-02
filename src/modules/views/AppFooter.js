import * as React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="/">
        Devbook
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 40 }}
            >
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

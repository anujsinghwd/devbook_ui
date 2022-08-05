import { Box } from "@mui/material";
import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import HeroLayout from "./HeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400";

export default function LandingHero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Share your Knowledge
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Share your knowledge. It is a way to achieve immortality.
      </Typography>
      <Box>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          href="/register"
          sx={{ minWidth: 200 }}
        >
          Register
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          href="/login"
          sx={{ minWidth: 200 }}
        >
          Login
        </Button>
      </Box>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </HeroLayout>
  );
}

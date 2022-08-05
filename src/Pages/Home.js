import * as React from "react";
import LandingHero from "../modules/views/LandingHero";
import withRoot from "../modules/withRoot";

function Home() {
  return (
    <React.Fragment>
      <LandingHero />
    </React.Fragment>
  );
}

export default withRoot(Home);

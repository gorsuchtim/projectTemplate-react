import React, { Fragment } from "react";

import Hero from "./Components/Hero/Hero";
import Commentary from "./Components/Commentary/Commentary";
import Accordion from "./Components/Accordion/Accordion";

const App = () => {
  return (
    <Fragment>
      <Hero />
      <Commentary />
      <Accordion />
    </Fragment>
  );
};

export default App;

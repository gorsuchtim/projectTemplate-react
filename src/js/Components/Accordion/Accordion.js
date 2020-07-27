import React from "react";

import AccordionControl from "./AccordionControl";
import taxCenter from "./accordion-data/tax-center";

const Accordion = () => {
  const accordionData = taxCenter.map(data => (
    <AccordionControl key={data.id} control={data.control} panel={data.panel} />
  ));

  return <div className="accordion">{accordionData}</div>;
};

export default Accordion;

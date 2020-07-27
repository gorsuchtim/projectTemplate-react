import React, { useState } from "react";

const AccordionControl = props => {
  const [expanded, setExpanded] = useState(props.expanded);
  const [hidden, setHidden] = useState(props.hidden);

  /*
can we, onclick useEffect to hide/collapse all
and then run updatePanelState
  */

  const updatePanelState = () => {
    setExpanded(!expanded);
    setHidden(!hidden);
  };

  return (
    <div>
      <button
        onClick={updatePanelState}
        aria-expanded={expanded}
        className="accordion__control"
      >
        {props.control}
      </button>
      <p className="accordion__panel" aria-hidden={hidden}>
        {props.panel}
      </p>
    </div>
  );
};

AccordionControl.defaultProps = {
  hidden: true,
  expanded: false
};

export default AccordionControl;

// This is no bueno because we aren't actually updating their state.
// How about useEffect - when we re-render we useEffect and we FIRST reset all to defaults
// const closeCompress = () => {
//   const accordionControls = Array.from(
//     document.querySelectorAll(".accordionControls")
//   );
//   const accordionPanels = Array.from(
//     document.querySelectorAll(".accordion__panel")
//   );

//   accordionControls.forEach(accordionControl => {
//     accordionControl.setAttribute("aria-expanded", false);
//   });

//   accordionPanels.forEach(accordionPanel => {
//     accordionPanel.setAttribute("aria-hidden", true);
//   });
// };

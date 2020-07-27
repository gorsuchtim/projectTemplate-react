import React from "react";

import CommentaryBlock from "./CommentaryBlock";
import commentaryData from "./commentaryData";

const Commentary = () => {
  const commentaryBlocksArray = commentaryData.map(block => (
    <CommentaryBlock
      key={block.id}
      headline={block.headline}
      content={block.content}
      url={block.url}
    />
  ));
  // here we can map over commentary data and output 1 commentary-block component for each?
  return <div className="commentary">{commentaryBlocksArray}</div>;
};

export default Commentary;

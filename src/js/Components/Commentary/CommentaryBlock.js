import React from "react";

const CommentaryBlock = props => {
  return (
    <div className="commentary__block">
      <h2 className="commentary__headline">{props.headline}</h2>
      <p className="commentary__content">{props.content}</p>
      <a className="commentary__link" href={props.url}>
        View more
      </a>
    </div>
  );
};

export default CommentaryBlock;

import React from "react";

const Collection = ({ docs }) => {
  if (!docs || docs.length === 0) {
    return <p>No documents to display.</p>;
  }

  return (
    <>
      {docs.map(({ Topic, props }, index) => (
        <Topic key={index} {...(props || {})} />
      ))}
    </>
  );
};

export default Collection;

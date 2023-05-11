import React from "react";

const AboutUsText = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "no-store",
  });
  const data = await res.json();

  return <p>{data[0].body}</p>;
};

export default AboutUsText;

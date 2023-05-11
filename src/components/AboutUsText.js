import React from "react";
async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "no-store",
      });
      const data = await res.json();
    return data;
  }
const AboutUsText = async () => {
const data = await fetchData();
  return <p>{data[0].body}</p>;
};

export default AboutUsText;

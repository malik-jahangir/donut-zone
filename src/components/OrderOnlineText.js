import React from "react";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {});
  const data = await res.json();
//   console.log(data[1].body);
  return data;
}

const OrderOnlineText = async () => {
  const data = await fetchData();
  return <p>{data[1].body}</p>;
};

export default OrderOnlineText;

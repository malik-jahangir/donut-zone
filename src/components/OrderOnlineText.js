import React from 'react'

const OrderOnlineText = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
      });
      const data = await res.json();
    
      return <p>{data[1].body}</p>;

}

export default OrderOnlineText
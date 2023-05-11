import React from "react";
import Image from "next/image";
import Link from "next/link";
import OrderOnlineText from "./OrderOnlineText";
const OrderOnline = () => {
  return (
    <div className="width order-online">
      <div className="order-online-text">
        <h6>FIND US ONLINE</h6>
        <h2>
          ORDER <span>ONLINE</span>!
        </h2>
      {/* <OrderOnlineText/> */}
        <Link className="btn-primary" href="/login">
          Order Now
        </Link>
      </div>
      <div className="order-online-img">
        <Image
          width={911}
          height={689}
          src="/images/order-now.png"
          alt="donut"
        />
      </div>
    </div>
  );
};

export default OrderOnline;

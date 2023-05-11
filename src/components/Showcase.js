import React from "react";
import Image from "next/image";
import Link from "next/link";
const Showcase = () => {
  return (
    <main className="width showcase">
      <div className="showcase-text">
        <h1>
          BEST <span>DONUTS</span> IN TOWN
        </h1>
        <Link href="#" className="btn-primary">
          Order Now
        </Link>
      </div>
      <div className="showcase-img">
        <Image src="/images/show.png" width={700} height={550} alt="donut" />
      </div>
    </main>
  );
};

export default Showcase;

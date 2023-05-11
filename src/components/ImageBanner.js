import React from "react";
import Image from "next/image";
const ImageBanner = () => {
  return (
    <div className="image-banner">
      <div className="col col1">
        <Image
          width={270}
          height={245}
          src="/images/imgbanner1.png"
          alt="donut"
        />
      </div>
      <div className="col col2">
        <Image
          width={270}
          height={245}
          src="/images/imgbanner2.png"
          alt="donut"
        />
        <Image
          width={270}
          height={245}
          src="/images/imgbanner3.png"
          alt="donut"
        />
      </div>
      <div className="col col3">
        <Image
          width={546}
          height={517}
          src="/images/imgbanner4.png"
          alt="donut"
        />
      </div>
      <div className="col col4">
        <Image
          width={270}
          height={245}
          src="/images/imgbanner5.png"
          alt="donut"
        />
        <Image
          width={270}
          height={245}
          src="/images/imgbanner6.png"
          alt="donut"
        />
      </div>
      <div className="col col5">
        <Image
          width={270}
          height={245}
          src="/images/imgbanner7.png"
          alt="donut"
        />
      </div>
    </div>
  );
};

export default ImageBanner;

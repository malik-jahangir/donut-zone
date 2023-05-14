import React from "react";
import Image from "next/image";
import Link from "next/link";
const Location = () => {
  return (
    <div className="width location">
      <div className="location-img">
    <Image width={1028} height={554} src="/images/location.png" alt="donut" />
      </div>
      <div className="location-text">
        <h6>OUR LOCATIONS</h6>
        <h2>COME SAY <span>HEY</span></h2>
        <p>Find your closest Donut Zone Stores</p>
        <Image width={520} height={284} src="/images/map.png" alt="map" />
        <Link className="btn-primary" href="#">View Locations</Link>
      </div>
    </div>
  );
};

export default Location;

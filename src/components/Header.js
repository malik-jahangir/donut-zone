import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="width">
      <div className="logo">
        <Image
          priority
          src="/images/logo-white.png"
          width={326}
          height={52}
          alt="logo"
        />
      </div>
      <div className="mobile-nav">
        <div className="nav-line"></div>
        <div className="nav-line"></div>
        <div className="nav-line"></div>
      </div>
      <nav className="header-nav">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>PRODUCTS</li>
          <li>REVIEWS</li>
          <li>LOCATIONS</li>
        </ul>
      </nav>
      <div className="header-btn">
        <Link href="">
          <Image width={26} height={20} src="/images/mail.png" alt="mail" />
        </Link>
        <Link className="btn-primary header-order-now" href="/login">
          <Image src="/images/phone.png" width={22} height={22} alt="phone" />
          <p>ORDER NOW</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;

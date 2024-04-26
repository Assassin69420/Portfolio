import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-black">
      <div className="container p-auto flex justify-between">
      <Image src="/images/logo_portfolio_new.png" alt="" className="w-60"/>
        <p className="text-slate-600 pt-8">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

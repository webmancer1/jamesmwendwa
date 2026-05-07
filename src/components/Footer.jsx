import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer border-t border-glass">
      <div className="container flex flex-col items-center justify-center gap-4">
        <a href="#" className="brand">
          <span className="brand-text"></span>
          <span className="brand-dot"></span>
        </a>
        <p className="text-muted text-sm text-center">
          &copy; {year} James Mwendwa. All rights reserved. <br />
          Built with React & Vanilla CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

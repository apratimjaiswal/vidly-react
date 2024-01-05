import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light footer-custom">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="text-muted">Powered by MERN Stack</div>
        <div className="text-muted" style={{ fontSize: "smaller" }}>
          React, NodeJS, Express & MongoDB
        </div>
      </div>
    </footer>
  );
};

export default Footer;

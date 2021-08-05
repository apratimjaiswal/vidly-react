import React from "react";

const Footer = () => {
  return (
    <footer class="footer mt-auto py-3 bg-light footer-custom">
      <div class="container" style={{ textAlign: "center" }}>
        <div class="text-muted">Powered by MERN Stack</div>
        <div class="text-muted" style={{ fontSize: "smaller" }}>
          React, NodeJS, Express & MongoDB
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© 2026 Syntax N. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
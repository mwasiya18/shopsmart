function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ShopSmart. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <span className="divider">|</span>
        <a href="#">Terms of Service</a>
        <span className="divider">|</span>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
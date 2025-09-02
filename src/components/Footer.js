function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ShopSmart. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
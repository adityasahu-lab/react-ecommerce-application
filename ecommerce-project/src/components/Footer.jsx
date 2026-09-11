import { NavLink } from 'react-router';
import { NewsLetter } from './NewsLetter';
import { ScrollToTopButton } from './ScrollToTopButton';
import './Footer.css';


export function Footer() {
  return (
    <footer>
      <div className="divider"></div>
      <ul>
        <div className="footer-link">
          <h3>Help</h3>
          <div className="link-items">
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
          </div>
        </div>

        <div className="footer-link">
          <h3>Quick Links</h3>
          <div className="link-items">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Returns/Exchange</a></li>
            <li><NavLink to="/orders">Order Tracking</NavLink></li>
          </div>
        </div>

        <div className="footer-link">
          <h3>Follow US</h3>
          <div className="link-items">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
          </div>
        </div>

        
        <div className="footer-link">
          <NewsLetter />
          <ScrollToTopButton />
        </div>
      </ul>
      <div className="copyright-message">
        <p>ALL RIGHTS RESERVED THESHOP @ 2026</p>
      </div>
    </footer>
  );
}
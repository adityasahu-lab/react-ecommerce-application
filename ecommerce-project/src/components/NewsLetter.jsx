import './NewsLetter.css';

export function NewsLetter() {
  
  return (
    <div className="newsletter-container">
      <h1>NEWSLETTER</h1>
      <p>Sign up to receive our news, updates,and exlcusive offers.</p>
      <div className="email-input">
        <input className="email-input-field" type="email" placeholder="Your email address" />
        <button className="subscribe-button">SUBSCRIBE</button>
      </div>
    </div>
  );
} 
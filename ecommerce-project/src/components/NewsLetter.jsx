import { useState } from 'react';
import './NewsLetter.css';

export function NewsLetter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubscribe() {
    setIsSubscribed((prev) => !prev);
  }

  return (
    <div className="newsletter-container">
      <h1>NEWSLETTER</h1>
      <p>Sign up to receive our news, updates,and exlcusive offers.</p>
      <div className="email-input">
        <input className="email-input-field" type="email" placeholder="Your email address" />
        <button className="subscribe-button" onClick={handleSubscribe}>{isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}</button>
      </div>
    </div>
  );
} 
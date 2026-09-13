import { useState } from 'react';
import './NewsLetter.css';

export function NewsLetter() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isThumbsupEmoji, setIsThumbsupEmoji] = useState(false);

  function handleSubscribe() {
    setIsSubscribed((prev) => !prev);
    setIsThumbsupEmoji(true);
    setTimeout(() => setIsThumbsupEmoji(false), 1000);
  }

  return (
    <div className="newsletter-container">
      <h1>NEWSLETTER</h1>
      <p>Sign up to receive our news, updates,and exlcusive offers.</p>
      <div className="email-input">
        <input className="email-input-field" type="email" placeholder="Your email address" />
        <div className="subscribe-button-container">
          {isThumbsupEmoji && <span className="thumbsup-emoji">👍</span>}
          <button className="subscribe-button" onClick={handleSubscribe} disabled={isSubscribed ? 'disabled' : ''}>{isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}</button>
        </div>
      </div>
    </div>
  );
} 
import { Header } from '../../components/Header';
import loginPageImage from '../../../public/images/login-page/a-woman-with-shopping-bags.jpg';
import './LoginPage.css';
export function LoginPage({ cart }) {
  return (
    <>
      <title>Login</title>

      <Header cart={cart} />

      <div className="login-overlay">
        <div className="login-outer-container">
          {/* <button class="close-button">X</button> */}

          <div className="login-inner-container">
            <div className="login-image-container">
              <img className="login-image" src={loginPageImage} alt="" />
            </div>
            <div className="login-input-element-container">
              <div className="login-input-container">
                <input className="login-input" type="password" placeholder="10-digit mobile number" />
                <button className="login-button">Login</button>
              </div>
              <p className="login-privacy-message">
                By continuing, you agree to our <span className="special-text"><a href="#">Terms & Conditions</a></span> and <span className="special-text"><a href="#">Privacy Policy</a></span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>


  );
}
import '../../style/login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="main-container-login-form">
      <form >
        <h1>Login</h1>
        <p className="do-you-have-account">Don't have an account? <Link className="link-react-decoration-none" to="/register"><b className="register-here">Register here!</b></Link></p>
          <div className="formInput">
            <label></label>
            <input />
          </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

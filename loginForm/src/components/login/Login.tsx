import '../../style/login.css';
import { Link } from 'react-router-dom';
import FormInput from '../register/formInput';
import { useState } from "react";

const LoginForm = () => {
  const [values, setValues] = useState<{
    [key: string]: String;
  }>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: showPassword ? "text" : "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    }
  ]

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main-container-login-form">
      <form className="login-main-form">
        <h1>Login</h1>
        <p className="do-you-have-account">Don't have an account? <Link className="link-react-decoration-none" to="/register"><b className="register-here">Register here!</b></Link></p>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="show-password-container">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={toggleShowPassword}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

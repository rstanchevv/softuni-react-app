import { useState } from "react";
import useForm from "../../hooks/useForm";
import styles from "./Login.module.css";

export const Login = ({ loginSubmitHandler }) => {
  const { values, changeHandler, submitHandler } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState('');

  const passwordValidator = () => {
    if (values.password.length < 6) {
      setPasswordError('Password should be at least 6 characters')
    } else {
      setPasswordError('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.inputFields}>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          onChange={changeHandler}
          value={values["email"]}
        />
      </div>
      <div className={styles.inputFields}>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={changeHandler}
          value={values["password"]}
          onBlur={passwordValidator}
          />
          {setPasswordError && <p className={styles.errorMessage}>{passwordError}</p>}
        </div>
      <div className={styles.btnContainer}>
        <button disabled={passwordError}className="btn btn-primary">Login</button>
      </div>
    </form>
  );
};

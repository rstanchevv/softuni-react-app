import { useState } from "react";
import useForm from "../../hooks/useForm";
import styles from "./Register.module.css";

export const Register = ({ registerSubmitHandler }) => {
  const [errors, setErrors] = useState({});
  const { values, changeHandler, submitHandler } = useForm(
    registerSubmitHandler,
    {
      email: "",
      password: "",
      rePassword: "",
    }
  );

  const passwordValidator = () => {
    if (values.password.length < 6) {
      setErrors((state) => ({
        ...state,
        password: "Password should be at least 6 characters",
      }));
    } else {
      if (errors.password) {
        setErrors((state) => ({ ...state, password: "" }));
      }
    }
  };

  const rePasswordValidator = () => {
    if (values.password !== values.rePassword) {
      setErrors((state) => ({
        ...state,
        rePassword: "Passwords don't match!",
      }));
    } else {
      if (errors.rePassword) {
        setErrors((state) => ({ ...state, rePassword: "" }));
      }
    }
    if (values.rePassword.length < 6) {
      setErrors((state) => ({
        ...state,
        rePassword: "Repeat password should be at least 6 characters",
      }));
    } else {
      if (errors.rePassword) {
        setErrors((state) => ({ ...state, rePassword: "" }));
      }
    }
  };

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
          value={values["email"]}
          onChange={changeHandler}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
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
          value={values["password"]}
          onChange={changeHandler}
          onBlur={passwordValidator}
        />
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password}</p>
        )}
      </div>
      <div className={styles.inputFields}>
        <label htmlFor="rePassword" className="form-label">
          Repeat Password
        </label>
        <input
          type="password"
          className="form-control"
          id="rePassword"
          name="rePassword"
          value={values["rePassword"]}
          onChange={changeHandler}
          onBlur={rePasswordValidator}
          />
          {errors.rePassword && (
            <p className={styles.errorMessage}>{errors.rePassword}</p>
          )}
        </div>
      <div className={styles.btnContainer}>
        <button disabled={Object.values(errors).some(x => x !== '')} className="btn btn-primary">Register</button>
      </div>
    </form>
  );
};

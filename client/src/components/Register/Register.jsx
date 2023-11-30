import useForm from "../../hooks/useForm";

export const Register = ({registerSubmitHandler}) => {
  const { values, changeHandler, submitHandler } = useForm(
    registerSubmitHandler,
    {
      email: "",
      password: "",
      rePassword: ""
    }
  );
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={values['email']}
          onChange={changeHandler}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={values['password']}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rePassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="rePassword"
          name="rePassword"
          value={values['rePassword']}
          onChange={changeHandler}
        />
      </div>
      <button className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

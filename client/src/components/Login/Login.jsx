import useForm from "../../hooks/useForm";

export const Login = ({loginSubmitHandler}) => {
  const { values, changeHandler, submitHandler } = useForm(loginSubmitHandler, {
    email: '',
    password: ''
  });

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
          onChange={changeHandler}
          value={values['email']}
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
          onChange={changeHandler}
          value={values['password']}
        />
      </div>
      <button className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

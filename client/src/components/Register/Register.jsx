export const Register = () => {
    return (
        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password"/>
        </div>
        <div className="mb-3">
            <label htmlFor="rePassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="rePassword"/>
          </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    )
}
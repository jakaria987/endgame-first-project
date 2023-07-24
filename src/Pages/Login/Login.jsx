import { Link } from "react-router-dom";
import authPic from "../../assets/login&signup.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
  })
  .catch(error => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-cyan-100 rounded-lg">
      <div className="hero-content flex-col lg:flex-row  rounded-xl pt-14">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold md:mb-8">Login now!</h1>
          <img className="w-5/6 h-50" src={authPic} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-cyan-400">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">LogIn</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-cyan-500 w-52 mx-auto"
                  type="submit"
                  value="LOgin"
                />
              </div>
            </form>
            <p className="py-4 font-bold">
              Are you new here?
              <Link
                className="text-xl btn btn-sm bg-cyan-500 rounded-lg ml-2 border-white"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

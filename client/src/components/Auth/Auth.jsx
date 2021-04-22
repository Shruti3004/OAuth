import React, { useState } from "react";
import Input from "./Input";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp, signIn } from "../../actions/auth.js";

function Auth() {
  const initialState = { firstName: "", lastName: "", email: "", password: "" };
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };
  const history = useHistory();
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <Input name="firstName" type="text" handleChange={handleChange} />
            <Input name="lastName" type="text" handleChange={handleChange} />
          </>
        )}
        <Input name="email" type="email" handleChange={handleChange} />
        <Input name="password" type="password" handleChange={handleChange} />
        <GoogleLogin
          clientId="640141996473-funu5p21jr2r4q9552tfn6dj9qdvc2aa.apps.googleusercontent.com"
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>Google Sign in</button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          {isSignUp ? "SignUp" : "SignIn"}
        </button>
        <button
          className="btn btn-warning"
          onClick={() => setIsSignUp((prevIsSignUp) => !prevIsSignUp)}
        >
          {isSignUp
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign up"}
        </button>
      </form>
    </div>
  );
}

export default Auth;

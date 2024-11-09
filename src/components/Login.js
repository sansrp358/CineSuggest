import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSIgnInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const HandleButtonClick = () => {
    //Validating the form data i.e the email and password using regex in validate file after clicking on Signin / Signup button
    //check readme for that useref current
    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message);

    //Now if its valid we will do SignIn / SignOff
  };

  const toogleSignInForm = () => {
    setIsSIgnInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg"
          alt="Netflix-background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black bg-opacity-75 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="text-3xl text-white font-bold py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="pl-4 my-3 py-4 w-full text-white bg-stone-800 bg-opacity-60 placeholder-white rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="pl-4 my-3 py-4 w-full text-white bg-stone-800 bg-opacity-90 placeholder-white rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="pl-4 my-3 py-4 w-full text-white bg-stone-800 bg-opacity-90 placeholder-white rounded-lg"
        />
        <p className="text-red-600 font-bold py-4">{errorMessage}</p>
        <button
          className="my-4 py-4 text-white bg-red-600 font-bold w-full rounded-lg"
          onClick={HandleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white font-bold py-6 cursor-pointer"
          onClick={toogleSignInForm}
        >
          {isSignInForm ? (
            <>
              <span className="text-gray-500 font-normal">New to Netflix?</span>
              <span className="border-b-2 border-red-600"> Sign Up Now!</span>
            </>
          ) : (
            <>
              <span className="text-gray-500 font-normal">
                Already Registered?
              </span>
              <span className="border-b-2 border-red-600"> Sign In Now!</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;

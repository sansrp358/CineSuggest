import { useState, useRef } from "react";

import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG_IMG, ProfileLogo } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSIgnInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const HandleButtonClick = () => {
    //Validating the form data i.e the email and password using regex in validate file after clicking on Signin / Signup button
    //check readme for that useref current
    const message = checkValidData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(message);
    if (message) return; //This implies that if there is something returened in meesage means we have some error then dont go ahead just return

    //if message returns null then we have no error and now we can sign in or sign upp
    //Now if its valid we will do SignIn / SignOff

    if (!isSignInForm) {
      //Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: ProfileLogo,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser; //here we are using auth.currentUser as if we use user its not updated
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL:
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser; //here we are using auth.currentUser as if we use user its not updated
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log(user);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toogleSignInForm = () => {
    setIsSIgnInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-black">
        <img
          className="absolute filter brightness-1"
          src={NETFLIX_BG_IMG}
          alt="Netflix-background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black bg-opacity-75 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="text-3xl text-white font-bold py-4 text-center">
          {isSignInForm ? "Sign In 2.49.20" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name "
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
          {isSignInForm ? "Sign In " : "Sign Up"}
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

import Header from "./Header";

const Login = () => {
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
      <form className="absolute p-12 bg-black bg-opacity-75 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="text-3xl text-white font-bold py-4 text-center">
          Sign In
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="pl-4 my-3 py-4 w-full text-white bg-stone-800 bg-opacity-60 placeholder-white rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="pl-4 my-3 py-4 w-full text-white bg-stone-800 bg-opacity-60 placeholder-white rounded-lg"
        />
        <button className="my-6 py-4 text-white bg-red-600 font-bold w-full rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

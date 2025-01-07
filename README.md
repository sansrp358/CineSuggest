--CINESUGGEST

--npx create-react-app project-name

--It uses webpack behind the scene as a bundler

--Installed Tailwind
-npm install -D tailwindcss
-npx tailwind init

--Add the below in tailwind.config.js file
content:["./src/**/*.{html,js}"]
--Add the below in your css files
@tailwind base;
@tailwind components;
@tailwind utilities;

--Add Routing to the website

- createBrowserRouter - path
  -element
  -And now Wrap the Project inside RouterProvider

--For form validation using useRef hook, it lets you reference a variable/value without having to render it
when you console log that it returns you an object current which is a reference to that variable and has value inside it.

eg - const email = useRef(null);

<input ref={email} type="text">

console.log(email)
console.log(email.current.value)

//checkValidData function is doing the form validation for Email Password using regex

//firebase code aaded which is required to connect our app to firebase server
To Deploy

firebase login
firebase init
firebase deploy

--Firebase API

1. createUserWithEmailAndPassword ---SIgnup
2. signInWithEmailAndPassword--------SignIn
3. onAuthStateChanged----------------For actionn like after sign up/ after sign in//afet logout
   this particular apii is called whenever the user signin, signout or logout, whenever there is authetication state change --its kind of linke event listner--this will be called automatically
   and this is added in useEffect

-- added the updateProfile code in SignIn API as well as becaus the userimage was loading only for signup so added that, need to confirm once if thats okay

--added the navigate code only in header component to avoid redirecting of the pages
--added unsubscribe to the onAUthStateChange callback when the component unmounts
--added constant file for hardcoded value
--created a account on TMDB and there in the edit profile - API - request API key and register your app to get API Key and API Read Access token

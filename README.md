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

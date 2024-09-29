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

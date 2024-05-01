# Introduction

Welcome to "Unsung Women," a dedicated platform that shines a light on the remarkable women throughout history whose contributions have often been overlooked or forgotten. Our mission is to uncover and celebrate the stories of women who have shaped our world in profound ways. From trailblazers in science and politics to pioneers in arts and social reforms, "Unsung Women" is committed to honoring these influential figures and ensuring their achievements are recognized and appreciated by generations to come. We invite users to join us as a contributor, whether by sharing stories of women who have impacted their lifes or by helping to unearth hidden figures whose influence deserves to be acknowledged.

Unsung Women is a Wikipedia-style directory highlighting the women who have made an impact on our world throughout time.
The platform allows users to contribute content, which is moderated by administrators before being published. Contributors can track the status of their submissions through their account page, and help populate the plateform.
Help us make Unsung Women, a beutiful and rich platform, become a contributor : https://main--influential-women.netlify.app/

# Installation Instructions

If you would like to work on this project, or create a version of it, here are the following instructions to use eithe/or the front and backend.
Here are the steps to set up the project:

## Front-end :

1. Clone the front-end repository to your local machine.
2. Navigate to the root of the project directory.
3. Run npm install to install all dependencies.
4. Execute npm run dev to start the development server.
5. Open your browser and go to http://localhost:3000 to view the app.

#### Tailwind CSS framework

To use **Tailwind**, as I've used to design Unsung Women's frontend, feel free to follow these installation steps (find more @https://tailwindcss.com/docs/installation):

1. `npm install -D tailwindcss postcss autoprefixer`
2. `npx tailwindcss init -p`
3. In your `tailwind.config.js` file, you'll need to have the below:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. In your `post.css` file, you'll need the following:

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

5. Rename your `main.scss` file to `index.css`, within your styles section
6. Add the following to the bottom of your `index.css` file (don't worry about the linting issues)

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Testing : To ensure it's working, try the following code :

```
import "./styles/index.css";
import React from "react";

function App() {
  return ( <>
    <div className="bg-blue-500 p-4">
      <p className="text-lg font-bold text-yellow-500">This is a</p>
      <p className="text-2xl font-extrabold text-green-500">multi-colored</p>
      <p className="text-sm font-semibold text-purple-500">sentence</p>
      <p className="text-base font-medium text-red-500">to test</p>
      <p className="text-xl font-semibold text-blue-500">Tailwind CSS</p>
      <p className="text-lg font-bold text-indigo-500">styles</p>
    </div>
  </>
  );
}

export default App;
```

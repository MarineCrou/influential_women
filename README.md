# Unsung Women

## Introduction

Welcome to "Unsung Women," a dedicated platform that shines a light on the remarkable women throughout history whose contributions have often been overlooked or forgotten. Our mission is to uncover and celebrate the stories of women who have shaped our world in profound ways. From trailblazers in science and politics to pioneers in arts and social reforms, "Unsung Women" is committed to honoring these influential figures and ensuring their achievements are recognized and appreciated by generations to come. We invite users to join us as a contributor, whether by sharing stories of women who have impacted their lifes or by helping to unearth hidden figures whose influence deserves to be acknowledged.

Unsung Women is a Wikipedia-style directory highlighting the women who have made an impact on our world throughout time.
The platform allows users to contribute content, which is moderated by administrators before being published. Contributors can track the status of their submissions through their account page, and help populate the plateform.
Help us make Unsung Women, a beutiful and rich platform, become a contributor : https://main--influential-women.netlify.app/

## Installation & Usage Instructions

If you would like to work on this project, or create a version of it, here are the following instructions to use eithe/or the front and backend.
Here are the steps to set up the project:

### Front-end:

1. Clone the front-end repository to your local machine.
2. Navigate to the root of the project directory.
3. Run npm install to install all dependencies.
4. Execute npm run dev to start the development server.
5. Open your browser and go to http://localhost:4000 to view the app.

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

7. Testing: To ensure tailwind is working, feel free to try this code in you `App.tsx` file

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

### Backend:

Our Unsung Women's API utilizes Python along with Flask and SQLAlchemy. Here's how to set up the API locally:

#### Prerequisites:

Ensure you have pipenv installed. If not, you can install it using `pip install pipenv`.

#### Installation Commands:

1. **_Run the following commands to set up your environment and install all necessary dependencies:_**

```
pipenv install
pipenv install Flask-SQLAlchemy psycopg2-binary Flask-Marshmallow marshmallow-sqlalchemy flask_bcrypt pyjwt pytest
```

_Note:_ The pytest package is optional and is used for running tests on the API.

2. **_Running the API:_**
   To start the API server, use: `pipenv run flask run`.
   You should get the following message, in your terminal:

```
Running on http://127.0.0.1:4000
```

3. **_Seeding the Database:_** To seed your database, run: `pipenv run python seed.py`

4. **_Data Visualization:_** For database management and visualization, `TablePlus` is recommended. It's a versatile desktop application suitable for various databases.

## Features

### Comprehensive Directory

- Our platform is a full-stack, Wikipedia-style directory dedicated to highlighting influential women from diverse fields. It features detailed profiles that include biographies, achievements, and related multimedia.

### Dynamic Homepage

- **Engaging Video Banner**: The homepage features a captivating video banner created with Canva, setting an inspiring tone for the visitors.
- **Random Woman Feature**: Each time the homepage is loaded, a random influential woman is featured. This not only enhances the UI/UX but also educates users about women they may not yet know.
- **Browse Profiles**: The homepage also displays the entire directory. Each profile shows the woman's image, name, and field. Clicking on a profile takes users to a detailed page where they can learn more about her contributions and achievements.

### Interactive User Contributions

- **Add, Edit and Contribute**: Registered users who are logged in have the ability to edit and update profiles. This feature allows users to contribute accurate and additional information, ensuring the platform remains current and factual. They also have the ability to add a new profile to the directory. All contributions will be published only if/when approved by administrators. If denied, a new woman's profile will not be published and an existing woman's profile will not be edited.

### Moderation and Submission Tracking

- **Content Moderation**: All user contributions undergo a thorough review by administrators before being published, maintaining the integrity and accuracy of the content.
- **Track Contributions**: Contributors can track the status of their submissions (approved, pending approval, denied) through their account page, providing transparency and keeping them engaged with the process. When a contribution has been reviewed, it's status will automatically be updated in the contributor's account.

### Account Management

- Users can manage their account page, to track their contributions and their statuses and engage with the community, enhancing their overall interaction with the platform.

## Technology Stack

Our project leverages several modern technologies designed to create a robust and user-friendly experience. Below is an outline of the main tools and their roles in our system:

### Front-end:

- **React**: A JavaScript library used for building dynamic and responsive user interfaces.
- **Tailwind CSS**: A CSS framework that allows for rapid styling of the app using utility classes without writing custom CSS.
- **TypeScript**: An extension of JavaScript that adds static types, helping to prevent errors and improve code quality.

### Back-end:

- **Python**: Used to build our server-side logic
- **Flask**: A Python web framework, reknown for it's simplicity and flexibility in building web applications.
- **SQLAlchemy**: An ORM (Object Relational Mapper) for Python, making it easier to handle database operations.
- **Flask-Marshmallow**: Used for object serialization and deserialization, simplifying the conversion of complex data types to and from Python objects and formats like JSON.
- **PostgreSQL**: Our chosen database system.
- **Psycopg2**: A PostgreSQL adapter for Python, facilitating efficient and secure database connections.
- **Flask-Bcrypt**: Provides hashing utilities for securing passwords.
- **PyJWT**: A Python library for encoding and decoding JSON Web Tokens (JWT), facilitating secure user authentication.

### Testing and Tools:

- **pytest**: A framework that makes it easy to write simple and scalable test cases for the application's backend.
- **Git**: Our version control system, essential for collaborative development.
- **TablePlus**: A database management tool that provides a clean and simple interface to interact with multiple databases.

This stack ensures that our application is efficient, maintainable, and scalable, providing a great experience for developers and users alike.

## Design and Planning

Unsung Women was developed within a sprint of 6 days.
The first day was dedicated to the wireframing,

## Project Status / Future Enhancements

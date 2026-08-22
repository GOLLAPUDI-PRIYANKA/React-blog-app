# React Blog App

A simple blog application built with React.js that allows users to browse, search, create, edit, and delete blog posts.

## Features

* View all blog posts
* Search posts
* View individual posts
* Create new posts
* Edit existing posts
* Delete posts
* Client-side routing with React Router
* Loading and error states for API requests
* 404 page for invalid routes
* Centralized state management with Easy Peasy

## Tech Stack

* React.js
* JavaScript
* React Router
* Axios
* Easy Peasy
* CSS
* JSON Server

## Project Structure

```text
src/
├── api/
│   └── posts.js
├── hooks/
│   └── useAxiosFetch.js
├── About.js
├── App.js
├── EditPost.js
├── Feed.js
├── Footer.js
├── Header.js
├── Home.js
├── Missing.js
├── Nav.js
├── NewPost.js
├── Post.js
├── PostPage.js
├── store.js
├── index.css
└── index.js

data/
└── db.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/GOLLAPUDI-PRIYANKA/React-blog-app.git
cd React-blog-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the JSON Server

The application uses a local JSON Server API running on port `3500`.

```bash
npx json-server --watch data/db.json --port 3500
```

### 4. Start the React application

Open another terminal in the project directory:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## API

The application communicates with the local JSON Server using Axios.

The API base URL is:

```text
http://localhost:3500
```

Post operations include:

* `GET /posts`
* `POST /posts`
* `PUT /posts/:id`
* `DELETE /posts/:id`

## What I Practiced

This project was built to practice React.js concepts including:

* Functional components
* React Hooks
* Custom Hooks
* State management
* Client-side routing
* Dynamic routes
* REST API integration
* CRUD operations
* Reusable components
* Error and loading state handling

## Future Improvements

* Add user authentication
* Improve responsive design
* Add post categories and tags
* Add pagination
* Deploy the application with a hosted backend


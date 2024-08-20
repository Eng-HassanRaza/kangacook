
# Full-Stack Product Management Application

## Overview

This project is a full-stack web application that allows users to add and view products instantly. The backend is built using Django, providing RESTful API endpoints, and the frontend is built using React, providing a responsive user interface.

**Features:**
- **Django Backend**: REST API for managing products.
- **React Frontend**: Real-time product addition and display.

## Table of Contents

- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Technologies

- **Backend**: Django, Django REST Framework
- **Frontend**: React.js, Axios
- **Database**: SQLite (for development), PostgreSQL (for production)

## Project Structure

```
/kangacook
  ├── backend
  │   ├── backend
  │   ├── api
  │   ├── manage.py
  │   ├── requirements.txt

  ├── kangacook (frontend)
  │   ├── src
  │   │   ├── components
  │   │   ├── App.css
  │   │   ├── App.js
  │   │   ├── App.test.js
  │   │   ├── index.css
  │   │   ├── index.js
  │   │   ├── logo.svg
  │   │
  │   ├── public
  │   ├── package.json
  │   └── .env
  ├── README.md
  └── .gitignore
```

## Setup Instructions

### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Eng-HassanRaza/kangacook.git
   cd kangacook/backend
   ```

2. **Create a Virtual Environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scriptsctivate`
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```


5. **Apply Migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Run the Development Server:**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd ../kangacook
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```

5. **Open Your Browser:**
   Visit `http://localhost:3000` to view the React application.

## Usage

- **Add Products**: Use the form on the frontend to add a new product.
- **View Products**: Products will be displayed immediately upon addition.

## API Endpoints

- **GET** `/api/items/`: Retrieve the list of all products.
- **POST** `/api/items/create/`: Create a new product.

# Project Title

This project is a full-stack web application...

## Documentation

For AWS Cloud architecture, please refer to the [PDF diagram](docs/architecture.pdf).

# Workout Buddy

A full-stack MERN (MongoDB, Express, React, Node.js) application for tracking your workout activities.

![Workout Buddy Screenshot](screenshots/workout-buddy-screenshot.png)

## Features

- Create, read, update, and delete workout records
- Track workout title, load (kg), and reps
- Responsive design for mobile and desktop
- Real-time updates when adding or removing workouts
- Validation for form inputs

## Tech Stack

### Frontend
- React.js
- React Context API for state management
- React Router for navigation
- date-fns for date formatting
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- RESTful API structure

## Project Structure

```
workout/
├── frontend/           # React frontend
│   ├── public/         # Static files
│   └── src/            # React source code
│       ├── components/ # React components
│       ├── context/    # Context API
│       ├── hooks/      # Custom React hooks
│       └── pages/      # Page components
└── backend/            # Express backend
    ├── controllers/    # Route controllers
    ├── models/         # Mongoose models
    └── routes/         # API routes
```

## Installation & Setup

### Prerequisites
- Node.js (v14.0.0 or later)
- MongoDB

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd MERN-Stack-Tutorial/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=3001
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd MERN-Stack-Tutorial/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

4. Open your browser and navigate to http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/workouts | Get all workouts |
| GET    | /api/workouts/:id | Get a specific workout |
| POST   | /api/workouts | Create a new workout |
| DELETE | /api/workouts/:id | Delete a workout |
| PATCH  | /api/workouts/:id | Update a workout |

## Usage

1. Create a new workout by filling out the form on the right side (desktop) or top (mobile) of the homepage.
2. View all your workouts in the list.
3. Delete a workout by clicking the delete icon.
4. Each workout displays how long ago it was created.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

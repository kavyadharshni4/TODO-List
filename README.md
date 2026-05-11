# TODO-List

A full-stack To-Do List application built with the MERN stack (MongoDB, Express, React, and Node.js).

## Features

- **Dashboard**: View all your tasks in one place.
- **Add Tasks**: Easily create new tasks with titles and descriptions.
- **Update Tasks**: Modify existing tasks to keep them up to date.
- **Delete Tasks**: Remove tasks once they are completed or no longer needed.
- **Responsive Design**: Clean and interactive UI that works across devices.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For navigation.
- **Axios**: For making API requests to the backend.
- **CSS**: Custom styling for a modern look.

### Backend
- **Node.js**: Runtime environment.
- **Express**: Web framework for the API.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM for MongoDB.
- **Dotenv**: For environment variable management.
- **Cors**: For handling Cross-Origin Resource Sharing.

## Installation and Setup

### Prerequisites
- Node.js installed on your machine.
- MongoDB Atlas account or local MongoDB instance.

### 1. Clone the repository
```bash
git clone https://github.com/kavyadharshni4/TODO-List.git
cd TODO-List
```

### 2. Backend Setup
1. Navigate to the `Server` directory:
   ```bash
   cd Server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Server` directory and add your MongoDB URI and PORT:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## Folder Structure

```
TODO-List/
├── client/          # React frontend
│   ├── public/      # Static assets
│   └── src/         # React components and logic
├── Server/          # Node.js/Express backend
│   ├── Controller/  # API controllers
│   ├── Models/      # Database schemas
│   └── index.js     # Entry point
└── README.md        # Project documentation
```

## License

This project is licensed under the ISC License.

# Project Name

## Description

Briefly describe your project here.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine
- MongoDB installed and running locally or access to a MongoDB instance

## Installation

To install the necessary dependencies, follow these steps:

1. Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```bash
    cd waywise
    ```

3. Install frontend dependencies:
    ```bash
    cd client
    npm install
    ```

4. Install backend dependencies:
    ```bash
    cd ../server
    npm install
    ```

## Configuration

Before running the project, ensure you configure any necessary environment variables:

create a .env file in the root directory of the project.
Define your environment variables in the .env file. For example:
bash
Copy code
    ```bash
    DATABASE=mongodb+srv://alfredthompsonovie:<PASSWORD>@cluster0.fvni2pr.mongodb.net/waywise?retryWrites=true&w=majority&appName=Cluster0
     
    DATABASE_PASSWORD=AusJUUV1PYSxO4b0
    JWT_SECRET=my-development-secret
    JWT_EXPIRES_IN=10d
    ```

Create another .env file in the root directory of the client folder.
Define your environment variables in the .env file. For example:
bash
Copy code
    ```bash
    VITE_GOOGLE_API_KEY=your_google_api_key
    VITE_CUSTOMER_END_POINT=127.0.0.1:3000/api/v1/customers
    ```

## Running the Application

To run the application locally, follow these steps:

1. Start the backend server (at the root directory of this project):
    ```bash
    npm start
    ```

2. Start the frontend development server:
    ```bash
    cd client
    npm run dev
    ```

3. Access the application in your web browser at `http://localhost:5173/`.



## License

This project is licensed under the [MIT License](LICENSE).

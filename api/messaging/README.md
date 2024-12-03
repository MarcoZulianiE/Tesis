# API: Messaging

This API simulates the **Messaging** service used in the integration scenario proposed in the project. Its function is to represent a messaging system that allows sending messages.

## 0. Table of Contents

1. [Available Endpoints](#1-available-endpoints)
2. [Execution](#2-execution)

## 1. Available Endpoints

The Messaging service API exposes several basic endpoints to simulate sending messages to users.

### 1.1. Send a Message

<table>
  <tr>
    <th>Description</th>
    <td>Sends a message.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>POST</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/messages</td>
  </tr>
  <tr>
    <th>Body</th>
    <td>
      <pre>
{
  "purchaseId": 1,
  "tripId": 1,
  "message": "You got a free trip to your home.",
  "user": {
    "id": 1,
    "email": "user@gmail.com",
    "phone": "3056476572"
  }
}
      </pre>
    </td>
  </tr>
  <tr>
    <th>Response (201 - Created)</th>
    <td>
      <pre>
{
    "id": 3,
    "purchaseId": 1,
    "tripId": 1,
    "message": "You got a free trip to your home.",
    "user": {
        "id": 1,
        "email": "user@gmail.com",
        "phone": "3056476572"
    },
    "updatedAt": "2024-09-22T16:42:36.360Z",
    "createdAt": "2024-09-22T16:42:36.360Z"
}
      </pre>
    </td>
  </tr>
</table>

### 1.2. Get All Messages

<table>
  <tr>
    <th>Description</th>
    <td>Returns all messages sent so far.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>GET</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/messages</td>
  </tr>
  <tr>
    <th>Response (200 - OK)</th>
    <td>
      <pre>
[
    {
        "id": 3,
        "purchaseId": 1,
        "tripId": 1,
        "message": "You got a free trip to your home.",
        "user": {
            "id": 1,
            "email": "user@gmail.com",
            "phone": "3056476572"
        },
        "createdAt": "2024-09-22T16:42:36.360Z",
        "updatedAt": "2024-09-22T16:42:36.360Z"
    }
]
      </pre>
    </td>
  </tr>
</table>

### 1.3. Health

<table>
  <tr>
    <th>Description</th>
    <td>Checks the service status.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>GET</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/health</td>
  </tr>
  <tr>
    <th>Response (200 - OK)</th>
    <td>
      Messaging API works
    </td>
  </tr>
</table>

### 1.4. Delete Messages

<table>
  <tr>
    <th>Description</th>
    <td>Deletes all messages from the database.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>DELETE</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/messages</td>
  </tr>
  <tr>
    <th>Response (204 - No Content)</th>
    <td>
      Empty       
    </td>
  </tr>
</table>

## 2. Execution

### 2.1. Configuration

The API must be configured using environment variables to connect to the database:

- `PORT`: Port where the API will run (default: `3000`).
- `DB_HOST`: Database host.
- `DB_USER`: Database user.
- `DB_PASS`: Database user password.
- `DB_NAME`: Database name.
- `DB_PORT`: Database port.

### 2.2. Local Execution

To run the API locally on your machine:

1. Ensure **Node.js** is installed.

2. Clone the repository and navigate to the `api/messaging` directory:

   ```bash
   git clone https://github.com/MarcoZulianiE/Tesis.git
   cd api/messaging
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the API:

   ```bash
   npm run start
   ```

5. The API will be running on `http://localhost:3000`.

### 2.3. Execution with Docker

If you prefer to run the API in a Docker container, follow these steps:

1. Ensure **Docker** is installed.

2. Clone the repository and navigate to the `api/messaging` directory:

   ```bash
   git clone https://github.com/MarcoZulianiE/Tesis.git
   cd api/messaging
   ```

3. Build the Docker image:

   ```bash
   docker build -t messaging-api .
   ```

4. Run the container:

   ```bash
   docker run -p 3000:3000 messaging-api
   ```

5. The API will be available at `http://localhost:3000`.

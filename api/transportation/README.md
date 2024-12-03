# API: Transportation

This API simulates the **Transportation** service used in the integration scenario proposed in the project. Its purpose is to represent the transportation booking system.

## 0. Index

1. [Available Endpoints](#1-available-endpoints)
2. [Execution](#2-execution)

## 1. Available Endpoints

The Transportation service API exposes several basic endpoints to simulate ride bookings for users and to query registered trips.

### 1.1. Register Trip

<table>
  <tr>
    <th>Description</th>
    <td>Registers a new trip.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>POST</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/trips</td>
  </tr>
  <tr>
    <th>Body</th>
    <td>
      <pre><code>{
  "origin": "store",
  "purchaseId": 1,
  "user": {
    "id": 1,
    "email": "user@gmail.com",
    "phone": "3056476572"
  }
}</code></pre>
    </td>
  </tr>
  <tr>
    <th>Response (201 - Created)</th>
    <td>
      <pre><code>{
  "id": 2,
  "origin": "store",
  "purchaseId": 1,
  "user": {
    "id": 1,
    "email": "user@gmail.com",
    "phone": "3056476572"
  },
  "destination": "Paraguay",
  "updatedAt": "2024-09-22T16:32:12.740Z",
  "createdAt": "2024-09-22T16:32:12.740Z"
}</code></pre>
    </td>
  </tr>
</table>

### 1.2. Get All Trips

<table>
  <tr>
    <th>Description</th>
    <td>Returns all registered trips.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>GET</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/trips</td>
  </tr>
  <tr>
    <th>Response (200 - OK)</th>
    <td>
      <pre><code>[
  {
    "id": 1,
    "origin": "store",
    "destination": "British Virgin Islands",
    "purchaseId": 1,
    "user": {
      "id": 1,
      "email": "user@gmail.com",
      "phone": "3056476572"
    },
    "createdAt": "2024-09-17T03:32:49.290Z",
    "updatedAt": "2024-09-17T03:32:49.290Z"
  }
]</code></pre>
    </td>
  </tr>
</table>

### 1.3. Health

<table>
  <tr>
    <th>Description</th>
    <td>Check the service status.</td>
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
    <td>Transportation API works</td>
  </tr>
</table>

### 1.4. Delete Trips

<table>
  <tr>
    <th>Description</th>
    <td>Deletes all trips from the database.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>DELETE</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/trips</td>
  </tr>
  <tr>
    <th>Response (204 - No Content)</th>
    <td>Empty</td>
  </tr>
</table>

## 2. Execution

### 2.1. Configuration

The API must be configured using environment variables to establish the connection with the database:

- `PORT`: Port on which the API will run (default: `3000`).
- `DB_HOST`: Database host.
- `DB_USER`: Database user.
- `DB_PASS`: Database user password.
- `DB_NAME`: Database name.
- `DB_PORT`: Database port.

### 2.2. Local Execution

To run the API locally on your machine:

1. Make sure you have **Node.js** installed.

2. Clone the repository and navigate to the `api/transportation` directory:

   ```bash
   git clone https://github.com/MarcoZulianiE/Thesis.git
   cd api/transportation
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the API:

   ```bash
   npm run start
   ```

5. The API will be running at `http://localhost:3000`.

### 2.3. Running with Docker

If you prefer to run the API in a Docker container, follow these steps:

1. Make sure you have **Docker** installed.

2. Clone the repository and navigate to the `api/transportation` directory:

   ```bash
   git clone https://github.com/MarcoZulianiE/Thesis.git
   cd api/transportation
   ```

3. Build the Docker image:

   ```bash
   docker build -t transportation-api .
   ```

4. Run the container:

   ```bash
   docker run -p 3000:3000 transportation-api
   ```

5. The API will be available at `http://localhost:3000`.

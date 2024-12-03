# API: Store Service

This API simulates the **Store** service used in the integration scenario proposed in the project. Its main function is to record sales and provide the ability to query recorded sales.

## 0. Index

1. [Available Endpoints](#1-available-endpoints)
2. [Execution](#2-execution)

## 1. Available Endpoints

The Store API exposes several basic endpoints to simulate the recording of purchases made by customers and their retrieval.

### 1.1. Register a Purchase

<table>
  <tr>
    <th>Description</th>
    <td>Records a new purchase in the store.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>POST</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/purchases</td>
  </tr>
  <tr>
    <th>Body</th>
    <td>
      <pre><code>{
  "items": ["item1", "item2", "item3"],
  "total": 170000,
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
      <pre><code>
  {
    "id": 37,
    "items": ["item1", "item2", "item3"],
    "total": 170000,
    "user": {
      "id": 1,
      "email": "user@gmail.com",
      "phone": "3056476572"
    },
    "updatedAt": "2024-09-22T14:17:56.336Z",
    "createdAt": "2024-09-22T14:17:56.336Z"
  }
</code></pre>
    </td>
  </tr>
</table>

### 1.2. Get All Purchases

<table>
  <tr>
    <th>Description</th>
    <td>Returns all purchases recorded up to the present.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>GET</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/purchases</td>
  </tr>
  <tr>
    <th>Parameters</th>
    <td><code>lastChecked</code>: date from which to search for purchases. (Optional)</td>
  </tr>
  <tr>
    <th>Response (200 - OK)</th>
    <td>
      <pre><code>[
  {
    "id": 33,
    "items": ["item1", "item2", "item3"],
    "total": 123.45,
    "user": {
      "id": 1,
      "email": "user@gmail.com",
      "phone": "3056476572"
    },
    "createdAt": "2024-09-22T14:11:55.913Z",
    "updatedAt": "2024-09-22T14:11:55.913Z"
  }
]</code></pre>
    </td>
  </tr>
</table>

### 1.3. Health

<table>
  <tr>
    <th>Description</th>
    <td>Validates the service status.</td>
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
    <td>API Store works</td>
  </tr>
</table>

### 1.4. Delete Purchases

<table>
  <tr>
    <th>Description</th>
    <td>Deletes all purchases from the database.</td>
  </tr>
  <tr>
    <th>HTTP Method</th>
    <td>DELETE</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/purchases</td>
  </tr>
  <tr>
    <th>Response (204 - No Content)</th>
    <td>Empty</td>
  </tr>
</table>

## 2. Execution

### 2.1. Configuration

The API must be configured using environment variables in order to connect to the database:

- `PORT`: Port on which the API will run (default: `3000`).
- `DB_HOST`: Database host.
- `DB_USER`: Database user.
- `DB_PASS`: Database user password.
- `DB_NAME`: Database name.
- `DB_PORT`: Database port.

### 2.2. Local Execution

Follow these steps to run the API locally:

1. Ensure you have **Node.js** installed.

2. Clone the repository and navigate to the `api/store` directory:

   ```bash
   git clone https://github.com/MarcoZulianiE/Thesis.git
   cd api/store
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the API:

   ```bash
   npm run start
   ```

5. The API will be available at `http://localhost:3000`.

### 2.3. Execution with Docker

If you prefer to run the API inside a Docker container, follow these steps:

1. Ensure you have **Docker** installed.

2. Clone the repository and navigate to the `api/store` directory:

   ```bash
   git clone https://github.com/MarcoZulianiE/Thesis.git
   cd api/store
   ```

3. Build the Docker image:

   ```bash
   docker build -t store-api .
   ```

4. Run the container:

   ```bash
   docker run -p 3000:3000 store-api
   ```

5. The API will be available at `http://localhost:3000`.

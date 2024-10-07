# API: Store

Esta API simula el servicio de **Store** utilizado en el escenario de integración propuesto en la tesis. Su función principal es registrar ventas y proporcionar la capacidad de consultar las ventas registradas.

## 0. Índice

1. [Endpoints Disponibles](#1-endpoints-disponibles)
2. [Ejecución](#2-ejecución)

## 1. Endpoints Disponibles

La API de Store expone varios endpoints básicos para simular el registro de compras realizadas por los clientes y la obtención de las mismas.

Aquí tienes el formato corregido, con el JSON colocado dentro de las celdas de la tabla y el error en el método `DELETE` corregido:

### 1.1. Registrar una Compra

<table>
  <tr>
    <th>Descripción</th>
    <td>Registra una nueva o varias compras en la tienda.</td>
  </tr>
  <tr>
    <th>Método HTTP</th>
    <td>POST</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/purchases</td>
  </tr>
  <tr>
    <th>Parámetros</th>
    <td><code>count</code>: número de compras a registrar. (Opcional)</td>
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
    <th>Respuesta (201 - Created)</th>
    <td>
      <pre><code>[
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
]</code></pre>
    </td>
  </tr>
</table>

### 1.2. Obtener Todas las Compras

<table>
  <tr>
    <th>Descripción</th>
    <td>Retorna todas las compras registradas hasta el momento.</td>
  </tr>
  <tr>
    <th>Método HTTP</th>
    <td>GET</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/purchases</td>
  </tr>
  <tr>
    <th>Parámetros</th>
    <td><code>lastChecked</code>: fecha a partir de la cuál buscar compras. (Opcional)</td>
  </tr>
  <tr>
    <th>Respuesta (200 - OK)</th>
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
    <th>Descripción</th>
    <td>Validar el estado del servicio.</td>
  </tr>
  <tr>
    <th>Método HTTP</th>
    <td>GET</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/health</td>
  </tr>
  <tr>
    <th>Respuesta (200 - OK)</th>
    <td>API Store works</td>
  </tr>
</table>

### 1.4. Eliminar Compras

<table>
  <tr>
    <th>Descripción</th>
    <td>Elimina todas las compras de la base de datos.</td>
  </tr>
  <tr>
    <th>Método HTTP</th>
    <td>DELETE</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/purchases</td>
  </tr>
  <tr>
    <th>Respuesta (204 - No Content)</th>
    <td>Empty</td>
  </tr>
</table>

## 2. Ejecución

### 2.1. Configuración

La API debe ser configurada usando variables de entorno con el fin de realizar la conexión con la base de datos:

- `PORT`: Puerto en el que correrá la API (por defecto: `3000`).
- `DB_HOST`: Host de la base de datos.
- `DB_USER`: Usuario de la base de datos.
- `DB_PASS`: Contraseña del usuario de la base de datos.
- `DB_NAME`: Nombre de la base de datos.
- `DB_PORT`: Puerto de la base de datos.

### 2.2. Ejecución Local

Sigue estos pasos para ejecutar la API localmente:

1. Asegúrate de tener **Node.js** instalado.

2. Clona el repositorio y navega al directorio `api/store`:

   ```bash
   git clone https://github.com/MarcoZulianiE/Tesis.git
   cd api/store
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta la API:

   ```bash
   npm run start
   ```

5. La API estará disponible en `http://localhost:3000`.

### 2.3. Ejecución con Docker

Si prefieres ejecutar la API dentro de un contenedor Docker, sigue estos pasos:

1. Asegúrate de tener **Docker** instalado.

2. Clona el repositorio y navega al directorio `api/store`:

   ```bash
   git clone https://github.com/MarcoZulianiE/Tesis.git
   cd api/store
   ```

3. Construye la imagen de Docker:

   ```bash
   docker build -t store-api .
   ```

4. Ejecuta el contenedor:

   ```bash
   docker run -p 3000:3000 store-api
   ```

5. La API estará disponible en `http://localhost:3000`.

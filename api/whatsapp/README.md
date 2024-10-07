# API: WhatsApp

Esta API simula el servicio de **WhatsApp** utilizado en el escenario de integración propuesto en la tesis. Su función es representar un sistema de mensajería que permite enviar mensajes.

## 0. Índice

1. [Endpoints Disponibles](#1-endpoints-disponibles)
2. [Ejecución](#2-ejecución)

## 1. Endpoints Disponibles

La API de WhatsApp expone varios endpoints básicos para simular el envío de mensajes a los usuarios.

### 1.1. Enviar un mensaje

<table>
  <tr>
    <th>Descripción</th>
    <td>Envía un mensaje.</td>
  </tr>
  <tr>
    <th>Método HTTP</th>
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
    <th>Respuesta (201 - Created)</th>
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

### 1.2. Obtener Todos los Mensajes

<table>
  <tr>
    <th>Descripción</th>
    <td>Retorna todos los mensajes enviados hasta el momento.</td>
  </tr>
  <tr>
    <th>Método HTTP</th>
    <td>GET</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/messages</td>
  </tr>
  <tr>
    <th>Respuesta (200 - OK)</th>
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
    <td>
      API WhatsApp works
    </td>
  </tr>
</table>

### 1.4. Eliminar Mensajes

<table>
  <tr>
    <th>Descripción</th>
    <td>Elimina todos los mensajes de la base de datos.</td>
  </tr>
  <tr>
    <th>Método HTTP</th>
    <td>DELETE</td>
  </tr>
  <tr>
    <th>URL</th>
    <td>/messages</td>
  </tr>
  <tr>
    <th>Respuesta (204 - No Content)</th>
    <td>
      Empty       
    </td>
  </tr>
</table>

## 2. Ejecución

## 2.1. Configuración

La API debe ser configurada usando variables de entorno con el fin de realizar la conexión con la base de datos:

- `PORT`: Puerto en el que correrá la API (por defecto: `3000`).
- `DB_HOST`: Host de la base de datos.
- `DB_USER`: Usuario de la base de datos.
- `DB_PASS`: Contraseña del usuario de la base de datos.
- `DB_NAME`: Nombre de la base de datos.
- `DB_PORT`: Puerto de la base de datos.

### 2.2. Ejecución Local

Para ejecutar la API localmente en tu máquina:

1. Asegúrate de tener **Node.js** instalado.

2. Clona el repositorio y navega al directorio `api/whatsapp`:

   ```bash
   git clone https://github.com/MarcoZulianiE/Tesis.git
   cd api/whatsapp
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta la API:

   ```bash
   npm run start
   ```

5. La API estará corriendo en `http://localhost:3000`.

### 2.3. Ejecución con Docker

Si prefieres ejecutar la API en un contenedor Docker, sigue estos pasos:

1. Asegúrate de tener **Docker** instalado.

2. Clona el repositorio y navega al directorio `api/whatsapp`:

   ```bash
   git clone https://github.com/MarcoZulianiE/Tesis.git
   cd api/whatsapp
   ```

3. Construye la imagen de Docker:

   ```bash
   docker build -t whatsapp-api .
   ```

4. Ejecuta el contenedor:

   ```bash
   docker run -p 3000:3000 whatsapp-api
   ```

5. La API estará disponible en `http://localhost:3000`.

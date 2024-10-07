# APIs

Este directorio contiene las implementaciones de **APIs simuladas** que representan los servicios de **Store**, **WhatsApp**, y **Uber**, utilizados para el escenario de prueba de la tesis: _"Hacia una Aproximación Basada en Coreografía para la Integración de Servicios en Ciudades Inteligentes"_.

## 0. Índice

1. [Descripción General](#1-descripción-general)
2. [Estructura del Directorio](#2-ejecución)
3. [Descripción de cada API](#3-descripción-de-cada-api)

## 1. Descripción General

Dado que las APIs oficiales de estos servicios no están disponibles para pruebas directas, se han desarrollado simulaciones sencillas que "simulan" las funcionalidades de interes. Estas **APIs simuladas** permiten probar la integración y los flujos de comunicación entre los servicios, como si se estuvieran utilizando las APIs reales.

Cada API refleja las operaciones esenciales del servicio que representa, facilitando las interacciones con otros servicios a través de llamadas HTTP y simulando el comportamiento esperado en un entorno de integración distribuida.

Todas las APIs han sido desarrolladas utilizando **Express.js** como framework para manejar las solicitudes y respuestas HTTP.

## 2. Estructura del Directorio

El directorio de APIs tiene la siguiente estructura, con cada subdirectorio conteniendo la implementación del servicio, los archivos de configuración, y su documentación correspondiente:

```
├── store                   // API simulada para el servicio de la tienda
├── uber                    // API simulada para el servicio de Uber
├── whatsapp                // API simulada para el servicio de WhatsApp
├── API.postman_collection  // Colección de Postman para probar las APIs
└── README.md               // Usted está aquí
```

## 3. Descripción de cada API:

- **Store API**: Simula el servicio de una tienda que registra ventas, permitiendo la creación y consulta de estas ventas.
- **Uber API**: Simula el servicio de transporte Uber, gestionando la reserva de viajes.
- **WhatsApp API**: Simula el servicio de mensajería WhatsApp, enviando mensajes a los usuarios con la información del viaje reservado.

Además, se incluye una **colección de Postman** para facilitar la prueba de las APIs simuladas.

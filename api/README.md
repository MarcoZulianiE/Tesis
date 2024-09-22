# APIs

Este directorio contiene las implementaciones de **APIs** simuladas que representan los servicios de **Store**, **WhatsApp** y **Uber**, utilizados en el escenario de prueba propuesto en la tesis.

## Descripción General

Dado que las APIs oficiales de estos servicios no están disponibles para pruebas directas, se han desarrollado **simulaciones sencillas** que permiten replicar sus principales funcionalidades. Estas APIs emulan los comportamientos esperados, facilitando la realización de pruebas de integración y flujos de comunicación entre los servicios, como si se tratara de las APIs reales.

Cada API está diseñada para reflejar las características esenciales del servicio que representa, permitiendo la interacción con otros servicios a través de llamadas HTTP.

## Estructura del Proyecto

Cada subdirectorio contiene la implementación de una API junto con las configuraciones necesarias para su ejecución.

```
├── store
├── uber
└── whatsapp
```

Dentro de cada subdirectorio se incluye:

- El **código fuente** de la API.
- Los **archivos de configuración** necesarios (como `Dockerfile`, archivos de entorno, etc.).
- Un **README** con la documentación específica para cada API.

### Ejecución

Para ejecutar cada API, en el **README** dentro del subdirectorio correspondiente se encuentran las instrucciones específicas de ejecución.

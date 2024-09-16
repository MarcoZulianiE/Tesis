# Repositorio de la Tesis: Hacia una Aproximación Basada en Coreografía para la Integración de Servicios en Ciudades Inteligentes

Este repositorio contiene el código fuente y las pruebas de concepto realizadas durante la tesis titulada **"Hacia una aproximación basada en coreografía para la integración de servicios en el contexto de ciudades inteligentes."**

El objetivo de este trabajo es explorar y analizar diversas herramientas y tecnologías que permiten la integración eficiente de aplicaciones en entornos de ciudades inteligentes, utilizando la coreografía basada en eventos y el envío de mensajes como paradigma de integración.

Uno de los requerimientos más importantes de esta solución es asegurar la **seguridad de los datos** durante todas las fases de transporte, procesamiento y almacenamiento. Además, dado el contexto de una ciudad inteligente, es esencial garantizar tanto la **disponibilidad** como la **escalabilidad** de la solución para manejar eficientemente la carga y las demandas de los servicios involucrados.

En este repositorio encontrarás:

- Implementaciones de pruebas de concepto de las herramientas seleccionadas como mejores alternativas para la integración de servicios.
- Ejemplos de integración mediante coreografía, donde los servicios interactúan a través de eventos distribuidos.
- **Diagramas** y otros elementos visuales que ilustran los flujos de integración y los procesos de comunicación entre servicios.
- Scripts y configuraciones utilizados para evaluar el rendimiento y la viabilidad de estas herramientas.

## Escenario sobre el que se está probando

En este escenario de prueba, contamos con tres servicios ofrecidos por diferentes empresas o grupos, que permiten el acceso a su información y funcionalidades a través de APIs u otros métodos de comunicación. Los servicios en cuestión son: una tienda, WhatsApp y Uber, los cuales exponen sus APIs para su uso.

La meta es integrar estos servicios para llevar a cabo un proceso distribuido. El flujo es el siguiente:

1. La tienda registra una nueva venta.
2. Si el valor de la venta supera los 150000 pesos, se debe realizar una reserva de un viaje en Uber para el cliente.
3. Una vez reservada la carrera, la información del viaje debe ser enviada al cliente a través de WhatsApp, finalizando así el flujo del proceso.

Dado que la **seguridad de los datos** es un aspecto fundamental en este escenario, se deben implementar soluciones que aseguren la protección de los datos durante su transporte, almacenamiento y procesamiento.

## Solución Actual Basada en Orquestación

Actualmente, se cuenta con una solución basada en un orquestador que gestiona el flujo del proceso de integración. El orquestador sigue el siguiente esquema:

![Diagrama de componentes del escenario con el uso de un orquestador](./assets/orchestration-diagram.png)

1. **Polling**: El orquestador mantiene una comunicación constante con el servicio de la tienda, realizando polling para verificar si hay nuevas ventas registradas.
2. **Validación**: En caso de detectar una nueva venta, el orquestador valida si el valor de la venta supera el límite de 150000 pesos.
3. **Reserva en Uber**: Si el valor de la venta es mayor al límite, el orquestador envía una solicitud a Uber para realizar la reserva de un viaje para el cliente.
4. **Notificación vía WhatsApp**: Una vez realizada la reserva, el orquestador toma los datos del viaje y envía una solicitud al servicio de WhatsApp para que el cliente reciba la información del viaje.

Este enfoque garantiza que todas las interacciones entre servicios sean gestionadas de manera centralizada por el orquestador, manteniendo el control y el seguimiento de cada paso del proceso.

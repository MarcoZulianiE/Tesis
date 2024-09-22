# Alternativas de Implementación

A partir del escenario planteado mediante **orquestación** y luego de realizar un análisis para determinar las mejores herramientas para la implementación de **brokers de eventos y mensajes**, se procedió a implementar el escenario utilizando cada una de estas herramientas: **RabbitMQ**, **Kafka** y **Pulsar**.

## Consideraciones

- Dado que los servicios disponibles solo exponen APIs públicas y **no pueden ser modificados**, se requiere crear un **servicio intermediario**. Este servicio será responsable de realizar las llamadas a las APIs y gestionar la producción y el consumo de los mensajes publicados en el **broker de mensajería**.

## Implementaciones

Para cada una de las herramientas seleccionadas, se ha realizado una implementación específica. Todas las implementaciones comparten los mismos APIs de **Store**, **WhatsApp** y **Uber**.

La principal variación entre las implementaciones es la herramienta utilizada como **broker de mensajería** y la configuración de los servicios intermediarios para adaptarse a cada uno de estos.

1. **Kafka**
2. **RabbitMQ**
3. **Pulsar**

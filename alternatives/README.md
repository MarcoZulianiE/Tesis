# Alternativas de Implementación

Este directorio contiene las implementaciones de los servicios para cada una de las alternativas de brokers de eventos y mensajes que se han analizado y desarrollado como parte de la solución propuesta en la tesis.

## 0. Índice

1. [Descripción General](#1-descripción-general)
2. [Consideraciones](#2-consideraciones)
3. [Estructura del Directorio](#3-estructura-del-directorio)
4. [Ejecución](#4-ejecución)

## 1. Descripción General

A partir del escenario planteado mediante **orquestación** y luego de realizar un análisis para determinar las mejores herramientas para la implementación de **brokers de eventos y mensajes**, se procedió a implementar el escenario utilizando cada una de estas herramientas: **RabbitMQ**, **Kafka** y **Pulsar**. Cada implementación ha sido diseñada para cumplir con los requisitos de la solución, asegurando una integración efectiva entre los servicios involucrados.

## 2. Consideraciones

- Dado que los servicios disponibles solo exponen APIs públicas y **no pueden ser modificados**, se requiere crear un **servicio intermediario**. Este servicio será responsable de realizar toda la lógica necesaria para el cumplimiento de su tarea, junto con las llamadas a las APIs y la gestión de la producción y el consumo de los mensajes publicados en el **broker de mensajería**.
- Cada uno de los brokers tiene características y configuraciones únicas, lo que requiere ajustes en la implementación de los servicios intermediarios para adaptarse a la herramienta utilizada.

## 3. Estructura del Directorio

El directorio de **Alternatives** contiene un directorio por cada una de las implementaciones realizadas con cada una de las herramientas.

```
├── kafka         // Escenario implementado con Kafka MQ
├── pulsar        // Escenario implementado con Pulsar
├── rabbit-mq     // Escenario implementado con RabbitMQ
└── README.md     // Usted está aquí
```

Dentro de cada alternativa se encuentra la implementación de los tres servicios intermediarios, con la configuración necesaria para utilizar la herramienta.

## 4. Ejecución

Para cada una de las herramientas seleccionadas, se ha realizado una implementación específica de los tres servicios: **Store**, **WhatsApp** y **Uber**.

Todas las implementaciones comparten los mismos APIs de **Store**, **WhatsApp** y **Uber**. La principal variación entre las implementaciones es la herramienta utilizada como **broker de mensajería** y la configuración de los servicios intermediarios para adaptarse a cada uno de estos.

En términos generales, la lógica es la misma en todos los casos, dado que los servicios producen o consumen mensajes que se adaptan a la herramienta utilizada. La lógica aplicada es consistente entre los mismos servicios de las diferentes implementaciones, garantizando una estructura coherente en la forma de trabajar con los datos y las interacciones de servicio.

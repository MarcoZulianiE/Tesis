# Alternativa: Pulsar

En este directorio se encuentra la implementación del escenario haciendo uso de la herramienta **Apache Pulsar**. Se implementan los servicios de puente que permiten consumir las APIs de los servicios, así como la publicación y el consumo de mensajes en el broker de Pulsar.

## 0. Índice

1. [Sobre Pulsar](#1-sobre-pulsar)
2. [Diagrama de Implementación](#2-diagrama-de-implementación)
3. [Ejecución](#3-ejecución)

## 1. Sobre Pulsar

[Apache Pulsar](https://pulsar.apache.org/) es una plataforma de mensajería y streaming de eventos distribuida, que ofrece características de alta disponibilidad y escalabilidad. Es conocida por su arquitectura de múltiples inquilinos y su capacidad para manejar grandes volúmenes de datos en tiempo real.

## 2. Diagrama de Implementación

El siguiente diagrama representa el flujo del proceso compuesto que se ejecuta para el cumplimiento del requerimiento del escenario establecido.

![Diagrama de componentes del escenario con el uso de Pulsar](../../assets/pulsar-diagram.png)

## 3. Ejecución

Para la ejecución se utiliza **Docker Compose**. Docker Compose permite levantar todos los servicios del escenario de manera rápida y sencilla. Esto incluye la ejecución de todas las APIs y los servicios intermediarios de **Store**, **Uber** y **WhatsApp**, así como el broker de Pulsar.

1. Asegúrate de tener **Docker** instalado.

2. Clona el repositorio y navega al directorio de la alternativa `alternatives\pulsar`:

   ```bash
   git clone https://github.com/MarcoZulianiE/Tesis.git
   cd alternatives\pulsar
   ```

3. Ejecuta el siguiente comando para levantar los servicios:

   ```bash
   docker-compose up --build
   ```

4. Para detener los servicios, usa:
   ```bash
   docker-compose down
   ```

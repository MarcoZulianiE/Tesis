# Alternativa: Kafka

En este directorio se encuentra la implementación del escenario haciendo uso de la herramienta **Kafka**. Se implementan cada uno de los servicios intermediarios que permiten consumir las APIs de los servicios de **Store**, **Uber** y **WhatsApp**, a la vez que se encargan de la publicación y el consumo de mensajes en el broker de Kafka.

## 0. Índice

1. [Sobre Kafka](#1-sobre-kafka)
2. [Diagrama de Implementación](#2-diagrama-implementación)
3. [Ejecución](#3-ejecución)

## 1. Sobre Kafka

[Apache Kafka](https://kafka.apache.org/) es una plataforma de streaming de eventos distribuida de código abierto utilizada por miles de empresas.

## 2. Diagrama de Implementación

El siguiente diagrama representa el flujo del proceso compuesto que se ejecuta para el cumplimiento del requerimiento del escenario establecido.

![Diagrama de componentes del escenario con el uso de Kafka](../../assets/kafka-diagram.png)

## 3. Ejecución

Para la ejecución se utiliza **Docker Compose**. Docker Compose permite levantar todos los servicios del escenario de manera rápida y sencilla. Esto incluye la ejecución de todas las APIs, los servicios intermediarios de **Store**, **Uber** y **WhatsApp**, así como el broker de Kafka.

1. Asegúrate de tener **Docker** instalado.

2. Clona el repositorio y navega al directorio de la alternativa `alternatives/kafka`:

   ```bash
   git clone https://github.com/MarcoZulianiE/Tesis.git
   cd alternatives/kafka
   ```

3. Ejecuta el siguiente comando para levantar los servicios:

   ```bash
   docker-compose up --build
   ```

4. Para detener los servicios, usa:
   ```bash
   docker-compose down
   ```

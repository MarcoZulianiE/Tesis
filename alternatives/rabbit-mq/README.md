# Alternative: RabbitMQ

En este directorio se encuentran los servicios de puente que permiten consumir las APIs de los servicios, así como la publicación y el consumo de mensajes en el broker de RabbitMQ.

## Sobre RabbitMQ

[RabbitMQ](https://www.rabbitmq.com/) is a reliable and mature messaging and streaming broker, which is easy to deploy on cloud environments, on-premises, and on your local machine. It is currently used by millions worldwide.

## Ejecución

1. Asegúrate de tener Docker instalado en tu sistema.

2. Navega hasta el directorio de la implementación que deseas ejecutar (Kafka, RabbitMQ o Pulsar).

3. Ejecuta el siguiente comando para levantar los servicios:

   ```bash
   docker-compose up --build
   ```

4. Para detener los servicios, usa:

   ```bash
   docker-compose down
   ```

## Diagrama

![Diagrama de componentes del escenario con el uso de RabbitMQ](../../assets/rabbitmq-diagram.png)

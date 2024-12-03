# Implementation Alternatives

This directory contains the service implementations for each of the event and message broker alternatives that have been analyzed and developed as part of the proposed solution in the thesis.

## 0. Index

1. [General Description](#1-general-description)
2. [Considerations](#2-considerations)
3. [Directory Structure](#3-directory-structure)
4. [Execution](#4-execution)

## 1. General Description

Based on the scenario initially defined through **orchestration**, and after conducting an analysis to determine the best tools for implementing **event and message brokers**, the scenario was implemented using each of these tools: **RabbitMQ**, **Kafka**, and **Pulsar**. Each implementation has been designed to meet the solution's requirements, ensuring effective integration between the involved services.

## 2. Considerations

- Since the available services only expose public APIs and **cannot be modified**, an **intermediary service** needs to be created. This service will handle all the necessary logic to fulfill its task, along with API calls and the management of producing and consuming messages published in the **messaging broker**.
- Each broker has unique characteristics and configurations, requiring adjustments in the intermediary service implementations to adapt to the specific tool being used.

## 3. Directory Structure

The **Alternatives** directory contains a subdirectory for each of the implementations made with the different tools.

```
├── kafka         // Scenario implemented with Kafka MQ
├── pulsar        // Scenario implemented with Pulsar
├── rabbit-mq     // Scenario implemented with RabbitMQ
└── README.md     // You are here
```

Within each alternative, you will find the implementation of the three intermediary services, along with the necessary configuration to use the selected tool.

## 4. Execution

For each of the selected tools, a specific implementation of the three services—**Store**, **Transportation**, and **Messaging**—has been carried out.

All implementations share the same **Store**, **Transportation**, and **Messaging** APIs. The main difference between the implementations is the tool used as the **messaging broker** and the configuration of the intermediary services to adapt to each of them.

In general terms, the logic remains the same across all cases, as the services produce or consume messages that are tailored to the tool used. The applied logic is consistent across the same services in the different implementations, ensuring a coherent structure in handling data and service interactions.

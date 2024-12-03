# APIs

This directory contains implementations of **simulated APIs** representing the **Store**, **Transportation**, and **Messaging** services, used for the case study scenario in the project: _"Towards a Choreography-Based Approach for Service Integration in Smart Cities"_.

## 0. Index

1. [General Description](#1-general-description)
2. [Directory Structure](#2-directory-structure)
3. [Description of Each API](#3-description-of-each-api)

## 1. General Description

Since the official APIs for these services are not available for direct testing, simple simulations have been developed to "mimic" the functionalities of interest. These **simulated APIs** allow testing of the integration and communication flows between services, as if the real APIs were being used.

Each API reflects the core operations of the service it represents, enabling interactions with other services through HTTP calls and simulating the expected behavior in a distributed integration environment.

All APIs have been developed using **Express.js**, a framework for handling HTTP requests and responses in **NodeJs**.

## 2. Directory Structure

The `api` directory has the following structure, with each subdirectory containing the service implementation, configuration files, and its corresponding documentation:

```
├── messaging                // Simulated service API for the messaging service
├── store                   // Simulated service API for the store service
├── transportation                    // Simulated service API for the transportation service
├── API.postman_collection  // Postman collection for testing the APIs
└── README.md               // You are here
```

## 3. Description of Each Service

- **Store Service**: Simulates a store service that records sales, allowing the creation and querying of sales.
- **Transportation Service**: Simulates the transportation service, managing trip reservations.
- **Messaging Service**: Simulates the messaging service, sending messages to users with information about reserved trips.

Additionally, a **Postman collection** is included to facilitate the testing of these simulated APIs.

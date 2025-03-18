# Performance Testing Project Using JMeter and k6

This repository contains the implementation of performance testing scripts using JMeter and k6 to simulate user journeys and API flows. The project is divided into two main folders:

- JMeter: Contains JMeter scripts for simulating a full user journey on a pet store website and testing the flow of APIs for a booking system. The scripts are designed to be independent of test data, with parameterization, assertions, and realistic delays. Additionally, load profiling is implemented using advanced thread groups like ip@gc - Stepping Thread Group and ip@gc - Ultimate Thread Group.

- k6: Includes the implementation of the first script using k6, a modern load testing tool, to simulate user behavior and measure system performance.

# Key Features:
JMeter Scripts:
- Simulates a full user journey including registration, product selection, cart management, and order confirmation.
- Covers API flow for creating, retrieving, updating, and deleting bookings.
- Load profiling with ramping up and down users, and handling spikes in load.
- Assertions and parameterization for robust and realistic testing.

k6 Script:
Implements the first script (The Full User Journey Script) using k6 for performance testing.

# Requirements:
- JMeter 5.4 or higher.
- k6 installed locally or in your CI/CD environment.
- Test data provided in Test_Data.csv.

# How to Run:
JMeter:
1. Open the JMeter_Assignment.jmx file in JMeter.
2. Run the script with the provided Test_Data.csv.
3. For load profiling, use First_Load.jmx and Second_Load.jmx.

k6:
1. Run the k6_script.js using the k6 CLI using the following command:
k6 run k6_script.js

# Websites:
- https://petstore.octoperf.com/actions/Catalog.action --> for petstore
- https://restful-booker.herokuapp.com/apidoc/ --> for restful booking 

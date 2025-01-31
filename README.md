# Clean Architecture Node.js & Express API

[![Node.js Version](https://img.shields.io/badge/node.js-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/express-%5E4.18.2-lightgrey)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A RESTful API implementation using Node.js, Express, and Clean Architecture principles. This project demonstrates separation of concerns through layered architecture with clear boundaries between business logic and infrastructure.

## Features

- **Product Management**
  - Create, read, update, and delete products
- **Category Management**
  - Get category details
  - List all categories
- **User Management**
  - Get user details
  - List all users
- **Clean Architecture Implementation**
  - Separation of entities, use cases, interfaces, and frameworks
  - Testable business logic

## Project Structure
Project try to follow the next structure:

![image](https://github.com/user-attachments/assets/527b5b0f-849f-45b5-9f5a-13d5dadd8895)

## Technologies

- Node.js
- Express.js
- Clean Architecture

## API Endpoints
### Products
- GET /api/products - *List all products*
- POST /api/products - *Create new product*
- GET /api/products/:id - *Get product details*
- PUT /api/products/:id - *Update product*
- DELETE /api/products/:id - *Delete product*

### Categories
- GET /api/categories - *List all categories*
- GET /api/categories/:id - *Get category details*

### Users
- GET /api/users - *List all users*
- GET /api/users/:id - *Get user details*

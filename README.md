# React E-Commerce Application

A full-stack e-commerce learning project built with React, Vite, Express, and SQLite. The project explores how a typical online shopping experience can be broken down into smaller frontend, backend, and data-driven features.

This is a learning and portfolio project. It is not intended to be a production-ready commerce platform. The focus is on understanding how the different pieces of a full-stack application work together.

## Overview

The application simulates a modern shopping experience where users can:

- Browse products
- Search and filter
- View product details
- Choose delivery options
- Track delivery progress
- Navigate between different parts of the storefront

The frontend is built with React and communicates with an Express backend through API routes. The backend handles application data and uses a local SQLite-compatible database for development.

## Features

**Storefront:** Responsive Layout, Product Grid (Images, Pricing, Reviews), Add-to-Cart, Dynamic Cart & Totals

**Checkout & Orders:** Delivery Selection, Order Summary & Payment, Order Page, Tracking Page, Login Page

**System:** Express API, Local Database, Interactive & Loading States

## Tech Stack

### Frontend

`React` • `Vite` • `JavaScript` • `JSX` • `HTML5` • `CSS3` • `React Router` • `Axios`

### Backend

`Node.js` • `Express` • `Sequelize` • `SQLite-compatible database`

### Development & Testing

`Vitest` • `ESLint`

## Project Structure

```
react-course/
│
├── ecommerce-backend/
│   ├── backend/
│   ├── defaultData/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── ecommerce-project/
    ├── public/
    ├── src/
    ├── package.json
    ├── vite.config.js
    └── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js v18 or later
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/adityasahu-lab/react-ecommerce-application
```

Install the backend dependencies:

```bash
cd ecommerce-backend
npm install
```

Then install the frontend dependencies:

```bash
cd ../ecommerce-project
npm install
```

## Run Locally

The frontend uses Vite's proxy to forward `/api` and `/images` requests to the backend.

You will need two terminals.

### 1. Start the backend

From the `ecommerce-backend` directory:

```bash
npm run dev
```

The API runs at:

```
http://localhost:3000
```

The backend initializes the local database and loads the default application data when required.

### 2. Start the frontend

From the `ecommerce-project` directory:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, typically:

```
http://localhost:5173
```

Keep both terminals running while using the application.

## Available Scripts

### Frontend

```bash
npm run dev
```

### Backend

```bash
npm run dev
```

## **Learning Outcomes**

This project helped me develop practical skills in:

- React component architecture
- State and prop management
- User interaction handling
- Conditional rendering
- Building e-commerce UI flows
- Routing between pages
- Responsive design patterns
- Structuring frontend applications in a scalable way
- Connecting a React frontend to a backend API
- Working with server routes and database-backed application data

## Future Improvements

- Authentication and authorization
- More complete database-backed order management
- Real payment processing
- Better validation and error handling
- More comprehensive automated testing
- TypeScript
- Production deployment and infrastructure

## License

This project is created for educational and portfolio purposes.

## Author

Built as part of my ongoing journey in frontend and full-stack web development.
# GroceryWebApp_NM
Here’s a GitHub README file tailored for the **Grocio Grocery Web App** project:

---

# **Grocio Grocery Web Application**

Grocio is a MERN-stack-based grocery web application designed to provide users with a seamless online shopping experience. It offers features like product browsing, real-time inventory updates, secure checkout, and an admin panel for efficient management.

---

## **Table of Contents**
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Setup Instructions](#setup-instructions)
5. [Folder Structure](#folder-structure)
6. [Running the Application](#running-the-application)
7. [API Documentation](#api-documentation)
8. [Authentication](#authentication)
9. [Screenshots](#screenshots)
10. [Testing](#testing)
11. [Known Issues](#known-issues)
12. [Future Enhancements](#future-enhancements)

---

## **Introduction**

### **Project Overview**
Grocio is a platform designed to simplify grocery shopping. It combines smart recommendations, dynamic inventory management, and a user-friendly interface to enhance customer convenience and efficiency.

### **Team Members**
- **Bhavadharani. V** – Project Manager  
- **Jayasree. K** – Frontend Developer  
- **Basheera Fathimah K. F** – Backend Developer  
- **Kirthana. G** – Database Administrator  
- **Keerthika. B** – Tester  

---

## **Features**
- **User-Friendly Dashboard**: Simplified navigation for customers.
- **Product Search & Filtering**: Search with filters for categories, brands, and price ranges.
- **Real-Time Inventory**: Dynamically updates product availability.
- **Cart & Checkout**: Smooth cart management with secure payment.
- **Order Tracking**: Monitors order status from placement to delivery.
- **Promotions & Discounts**: Personalized offers and codes.
- **Authentication**: Secure token-based login/signup.
- **Admin Panel**: Manages inventory, orders, and user accounts.

---

## **Technology Stack**
- **Frontend**: React.js, Redux  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT-based secure token system  

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v14 or above)  
- MongoDB (v4.4 or above)  
- npm  
- A code editor like VS Code  

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/grocio.git
   cd grocio
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the server directory:
     ```env
     MONGO_URI=<MongoDB Connection String>
     JWT_SECRET=<Your JWT Secret>
     PORT=5000
     ```
4. Start MongoDB locally or connect to a hosted instance.

---

## **Folder Structure**

### **Frontend**
- `src/`
  - `components/`: Reusable React components.
  - `pages/`: Core pages like Home, Product List, Cart, and Checkout.
  - `redux/`: State management files (actions, reducers, and stores).
  - `styles/`: CSS or SCSS files for styling.

### **Backend**
- `routes/`: Defines API endpoints (e.g., `/products`, `/users`, `/orders`).
- `models/`: Mongoose schemas for Users, Products, and Orders.
- `middleware/`: Authentication, error handling, and validation logic.
- `controllers/`: Logic for handling requests (CRUD operations).

---

## **Running the Application**

### **Frontend**
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Start the development server:
   ```bash
   npm start
   ```

### **Backend**
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Start the Node.js server:
   ```bash
   npm start
   ```

---

## **API Documentation**
Refer to the detailed API documentation [here](./docs/api-docs.md).  

---

## **Authentication**
- Uses JWT-based authentication.  
- Token issued during login for secure route access (e.g., cart, orders).  

---

## **Screenshots**
### **Home Page**
Displays featured categories and promotions.

### **Product Page**
Lists products with sorting and filtering options.

### **Cart & Checkout**
Interactive cart summary with secure payment options.

### **Order Tracking**
Tracks order progress from placement to delivery.

---

## **Testing**
- **Unit Testing**: Jest for frontend and backend.  
- **API Testing**: Postman collections for endpoint testing.  
- **Integration Testing**: Cypress for end-to-end tests.  

---

## **Known Issues**
- Limited payment gateway integrations.  
- Multi-language support is not yet implemented.  

---

## **Future Enhancements**
- AI-based personalized product recommendations.  
- Voice-based search functionality.  
- Integration of multiple payment gateways (Stripe, Razorpay).  
- Mobile app development for enhanced accessibility.  

---

## **Demo**
Watch a walkthrough of the app [here](https://drive.google.com/file/d/13VfRMx1IxogRuAcHf1DuU5sKWWhxwIUb/view?usp=sharing).  

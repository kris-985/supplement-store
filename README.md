Supplement Store

Welcome to the Supplement Store project! This is a comprehensive e-commerce platform for selling nutritional supplements, offering a wide range of features to both users and administrators.

Features

User Authentication

Login and Registration: Users can create an account and log in securely using Firebase Authentication.

Account Management: Users can view and edit their personal information in their account dashboard.

Admin Panel

Product Management: Admins can add, edit, and remove products from the database.

Order Management: Admins can view all orders placed by users, manage order status, and ensure smooth operations.

Shopping and Orders

Favorite Products: Users can add or remove products from their favorites list for quick access.

Cart and Checkout: Users can add products to their cart, adjust quantities, and proceed to secure checkout using Stripe for payment processing.

Order History: Users can view their order history and track past purchases.

Free Shipping: Free shipping is available for orders above a certain amount.

Discount Codes: Users can apply discount codes at checkout for savings.

Product Discovery and Promotions

Best Sellers: Users can view the most ordered and popular products.

Customer Recommendations: Based on customer feedback, recommended products are showcased.

Product Promotions: Special promotions and discounts on selected products are highlighted.

Partner Showcase: Information about our partners is displayed, helping users trust our product sources.

Newsletter and Feedback

Newsletter Subscription: Users can subscribe to our newsletter to receive updates on promotions and new products.

Customer Survey: Users can participate in a survey to provide feedback on why they choose our store.

Technologies Used

Frontend:

React

Bootstrap

Styled-components

React-spring for animations

React-icons

React-bootstrap

React-slick for carousels

React-spinners for loading indicators

Sweetalert2 for alerts

Backend:

Firebase for real-time database, authentication

Stripe for payment processing

Additional Libraries:

React-firebase-hooks

React-intersection-observer

React-countup

Getting Started

Prerequisites

A Firebase account and project setup

A Stripe account for payment processing

Setup

1.Clone the repository:

git clone https://github.com/kris-985/supplement-store.git

cd supplement-store

2.Configure Firebase:

Go to your Firebase console and set up the project by configuring Firebase Authentication, Realtime Database.

Update the Firebase configuration in the project with your project's Firebase credentials:

const firebaseConfig = {

apiKey: "AIzaSyAQ4v5yNtDavDf9R1iun95fw76lBM7wmw8",

authDomain: "supplement-store-c68a2.firebaseapp.com",

projectId: "supplement-store-c68a2",

storageBucket: "supplement-store-c68a2.appspot.com",

messagingSenderId: "954928525287",

appId: "1:954928525287:web:cdb2a46a25c4f2b0e45742",

measurementId: "G-BVM6DBK7N2",

databaseURL: "https://supplement-store-c68a2-default-rtdb.europe-west1.firebasedatabase.app/"

};

3.Stripe Setup:

Update the Stripe keys in your project with your Stripe account details:

const stripeConfig = {
publishableKey: "pk_test_51PiQZjRtHdvVHimoxL7A4WKmSXl65EWI2EiHlVBoF3sI7bLgZZOE3ywM7xvldhjZUU5stSqgluUBxcB4ZH7bl6cn00DHSKqZKB",
};

4.Deploy to Firebase:

Deploy the project to Firebase Hosting using Firebase CLI:

firebase deploy

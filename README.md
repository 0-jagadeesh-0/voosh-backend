# voosh-backend

1. clone the repository <code>git clone https://github.com/0-jagadeesh-0/voosh-backend.git</code>

2. <code>npm install</code>

3. <code>npm start</code>

## Models

### User model
   - firstName: first name of the user
   - lastName: last name of the user
   - email: email of the user
   - username: username name of the user
   - phoneNumber: phone number of the user
   - password: password of the user
   
### Cart model
   - userId: user id
   - items: items added by the user
   - subtotal: total worth of the cart

### Order model
   - userId: user id
   - orders: total orders made by the user
   - phoneNumber: phone number of the user

## APIs

### Register User
   - api/auth/add-user
   - User can register by adding firstName, lastName, email, username, phoneNumber and password.
### Login User
   - api/auth/login-user
   - User can login with either phone number or username and password.
### User Info
   - api/user/info
   - User can fetch details from the database.
### User Details Update
   - api/user/update
   - User can update details like firstName, lastName, email, username and password in the database. 
### Add Items to cart
   - api/cart/add
   - User can add item to the cart.
### Get Items from the cart
   - api/cart/items
   - User can get all the items from the cart.
### Add Order
   - api/orders/add
   - User can place an order.
### Get User Orders
   - api/orders/items
   - User can fetch all the orders from the database. 

# voosh-backend

1. clone the repository <code>git clone https://github.com/0-jagadeesh-0/voosh-backend.git</code>

2. <code>npm install</code>

3. <code>npm start</code>

## APIs

### Register User
   - api/auth/add-user
   - User can register by adding firstName, lastName, email, username, phoneNumber and password.
### Login User
   - api/user/login-user
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

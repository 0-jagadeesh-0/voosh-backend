const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/user');
const cors = require('cors');

dotenv.config();

const app = express();
connectDB();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: "*"
}));

app.get('/', (req, res) => {
    res.status(200).send("Hurray, Server is working...")
})

app.use('/api/auth/', authRoutes);
app.use('/api/cart/', cartRoutes);
app.use('/api/orders/', orderRoutes);
app.use('/api/user/', userRoutes);

app.listen(8080, () => {
    console.log("server is running on port 8080...");
})
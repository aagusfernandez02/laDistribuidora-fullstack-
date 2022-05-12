const express = require('express');
const mongooose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

const usersRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/products')

dotenv.config();

mongooose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Mongoose connected succesfully"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("BACKEND ON");
});
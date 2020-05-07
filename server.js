const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
//import all the routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const vendorRoutes = require("./routes/vendor");
const categoryRoutes = require("./routes/category");
const serviceRoutes = require("./routes/service");
const subServiceRoutes = require("./routes/subService");
const orderRoutes = require("./routes/order");
const subscribeUsRoutes = require("./routes/subscribeUs");
const contactUsRoutes = require("./routes/contactUs");
const router = require("express").Router();

const path = require("path");
//app
const app = express();

//port initializing
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", vendorRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", serviceRoutes);
app.use("/api", subServiceRoutes);
app.use("/api", orderRoutes);
app.use("/api", contactUsRoutes);
app.use("/api", subscribeUsRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("opebo-master/build"));

//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "opebo-master", "build", "index.html"));
//   });
// }

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

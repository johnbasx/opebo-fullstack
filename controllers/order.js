// require on top
const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { Order, Booking } = require("../models/order");
const { errorHandler } = require("../controllers/dbErrorHandler");

exports.orderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("subServices.subService", "name price")
    .exec((err, order) => {
      if (err || !order) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      req.order = order;
      next();
    });
};

exports.create = (req, res) => {
  // console.log("CREATE ORDER: ", req.body);
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json(data);
  });
};

exports.listOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name address")
    .sort("-created")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }
      res.json(orders);
    });
};

exports.getStatusValues = (req, res) => {
  res.json(Order.schema.path("status").enumValues);
};

exports.updateOrderStatus = (req, res) => {
  Order.update(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (err, order) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(order);
    }
  );
};

// your create order method with email capabilities
exports.create = (req, res) => {
  console.log("CREATE ORDER: ", req.body);
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    // User.find({ categories: { $in: categories } }).exec((err, users) => {}
    console.log("ORDER IS JUST SAVED >>> ", order);
    // send email alert to admin
    // order.address
    // order.products.length
    // order.amount
    const emailData = {
      to: "subashwork10@gmail.com", // admin
      from: "noreply@opebo.com",
      subject: `A new order is received`,
      html: `
            <h1>Hey Admin, Somebody just made a booking in your opebo site</h1>
            <h2>Customer name: ${order.user.name}</h2>
            <h2>Customer address: ${order.address}</h2>
            <h2>User's purchase history: ${
              order.user.history.length
            } purchase</h2>
            <h2>User's email: ${order.user.email}</h2>
            <h2>Total products: ${order.products.length}</h2>
            <h2>Transaction ID: ${order.transaction_id}</h2>
            <h2>Order status: ${order.status}</h2>
            <h2>Service details:</h2>
            <hr />
            ${order.subServices
              .map((p) => {
                return `<div>
                        <h3>Service Name: ${p.name}</h3>
                        <h3>Service Price: ${p.price}</h3>
                </div>`;
              })
              .join("--------------------")}
            <h2>Total service cost: ${order.amount}<h2>
            <p>Login to your dashboard</a> to see the order in detail.</p>
        `,
    };
    sgMail
      .send(emailData)
      .then((sent) => console.log("SENT >>>", sent))
      .catch((err) => console.log("ERR >>>", err));

    // email to buyer
    const emailData2 = {
      to: order.user.email,
      from: "noreply@opebo.com",
      subject: `You order is in process`,
      html: `
            <h1>Hey ${
              req.profile.name
            }, Thank you for choosing Opebo Service.</h1>
            <h2>Services: ${order.subServices.length}</h2>
            <h2>Transaction ID: ${order.transaction_id}</h2>
            <h2>Order status: ${order.status}</h2>
            <h2>Services details:</h2>
            <hr />
            ${order.subServices
              .map((p) => {
                return `<div>
                        <h3>Service Name: ${p.name}</h3>
                        <h3>Service Price: ${p.price}</h3>
                </div>`;
              })
              .join("--------------------")}
            <h2>Total order cost: ${order.amount}<h2>
            <p>Stay connected with us.</p>
            <p> Opebo for everyone. </>
        `,
    };
    sgMail
      .send(emailData2)
      .then((sent) => console.log("SENT 2 >>>", sent))
      .catch((err) => console.log("ERR 2 >>>", err));

    res.json(data);
  });
};

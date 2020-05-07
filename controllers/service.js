const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Service = require("../models/service");
const { errorHandler } = require("../controllers/dbErrorHandler");

exports.serviceById = (req, res, next, id) => {
  Service.findById(id)
    .populate("category")
    .exec((err, service) => {
      if (err || !service) {
        return res.status(400).json({
          error: "Service not found",
        });
      }
      req.service = service;
      next();
    });
};

exports.read = (req, res) => {
  return res.json(req.service);
};

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields) => {
    // check for all fields
    const { name, description, category } = fields;

    if (!name || !description || !category) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let service = new Service(fields);

    service.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

exports.remove = (req, res) => {
  let service = req.service;
  service.remove((err, deletedService) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Service deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields) => {
    let service = req.service;
    service = _.extend(service, fields);

    service.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

//sort the list of services that comes under its category
exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Service.find()
    .populate("category")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, services) => {
      if (err) {
        return res.status(400).json({
          error: "Services not found",
        });
      }
      res.json(services);
    });
};

//fetch all the related services along with their categories
exports.listRelated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Service.find({ _id: { $ne: req.service }, category: req.service.category })
    .limit(limit)
    .populate("category", "_id name")
    .exec((err, services) => {
      if (err) {
        return res.status(400).json({
          error: "Services not found",
        });
      }
      res.json(services);
    });
};

exports.listCategories = (req, res) => {
  Service.distinct("category", {}, (err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "Categories not found",
      });
    }
    res.json(categories);
  });
};

/**
 * list products by search
 * we will implement service search in react frontend
 * we will make api request and show the services to users based on what he wants
 */

exports.listSearch = (req, res) => {
  // create query object to hold search value and location value
  const query = {};
  // assign search value to query.name
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: "i" };
    // assign location value to query.location
    if (req.query.location && req.query.location != "All") {
      query.location = req.query.location;
    }
    // find the product based on query object with 2 properties
    // search and location
    Service.find(query, (err, services) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(services);
    });
  }
};

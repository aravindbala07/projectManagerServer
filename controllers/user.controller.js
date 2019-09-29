const User = require("../model/user");

module.exports = {
  addUser: function(req, res) {
    var user = new User(req.body);
    user.save(function(err) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.status(201).json({ success: true });
      }
    });
  },
  getAllUsers: function(req, res) {
    User.find({}).exec(function(err, users) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true, data: users });
      }
    });
  },
  getUserById: function(req, res) {
    let userId = req.params.id;
    User.findOne({ userId: userId }).exec(function(err, user) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true, data: user });
      }
    });
  },
  UpdateUser: function(req, res) {
    let user = req.body;
    let userId = req.params.id;
    User.findOneAndUpdate(userId, { $set: user }, {}, function(err, user) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true, data: user });
      }
    });
  },
  deleteUser: function(req, res) {
    let userId = req.params.id;

    User.remove({ userId: userId }, function(err) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true });
      }
    });
  }
};

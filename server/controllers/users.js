var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

    create: function(req,res) {
        console.log(req.body);

        // var hashword = function(newUser, callback) {
        //     bcrypt.genSalt(10, (err, salt) => {
        //         bcrypt.hash(newUser.password, salt, (err, hash) => {
        //         if(err) throw err;
        //         newUser.password = hash;
        //         })
        //     })
        // };

        var newUser = new User({

            firstName : req.body.firstName,
            lastName : req.body.lastName,
            address : req.body.address,
            city : req.body.city,
            state : req.body.state,
            zipCode : req.body.zipCode,
            birthdate : req.body.birthdate,
            email : req.body.email,
            password : req.body.password

        });
        
        newUser.save(function(err) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(newUser);
            }
        });
    },

    read: function(req,res) {
        User.find({}, function(err, users) {
            if (err) {
                console.log("There was an error loading users *****" + err);
            } else {
                console.log(users);
                res.json(users);
            }
        });
    },

    login: function(req,res) {
        var findEmail = req.body.email;
        User.findOne({email: findEmail}, function(err, user) {
            if (err) {
                console.log("LOGIN ERROR" + err);
            } else {
                req.session.current_user = user;
                console.log("CURRENT LOGGED IN USER: " +user);
                res.json(user);
            }
        });
    },

    current: function(req,res){
        console.log("CURRENT USER: " +req.session.current_user.email);
        res.json(req.session.current_user);
    },

    logout: function(req,res){
        req.session.current_user = {};
        res.json([]);
    }
}
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "ENTER FIRST NAME user.js file."],
        trim: true,
    },

    lastName: {
        type: String,
        required: [true, "ENTER LAST NAME user.js file."],
        trim: true,
    },

    address: {
        type: String,
        required: [true, "ENTER ADDRESS user.js file."],
    },

    city: {
        type: String,
        required: [true, "ENTER CITY user.js file."],
    },

    state: {
        type: String,
        required: [true, "ENTER STATE user.js file."],
        trim: true,

    },

    zipCode: {
        type: Number,
        required: true,
        minlength: [5, "TOO SHORT"],
        maxlength: [5, "TOO LONG"]
    },

    birthdate: {
        type: Date,
        required : [true, "ENTER BIRTHDAY user.js file."],
    },

    email: {
        type: String,
        required: [true, "Email Required."],
        minlength: [5, "Email too short, try again."],
        maxlength: [40, "Email too long, man."],
        unique: [true, "Email already in use."],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "INVALID EMAIL, TRY AGAIN."]
    },

    lastName: {
        type: String,
        required: [true, "ENTER LAST NAME."],
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^([a-zA-Z0-9@*#]{8,32})$/.test( value );
          },
          message: "Password must be 8 characters, contain at least 1 number, 1 uppercase letter and don't use your dog's name."
        }
    },

    
});

mongoose.model('User', UserSchema);
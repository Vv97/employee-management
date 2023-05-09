const mongoose = require("mongoose");


const dashboardSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    department: {
        type: String,
        require: true
    },

    salary: {
        type: Number,
        require: true
    },
},
    {
        versionKey: false
    }
);


const dashboardModel = mongoose.model("dashboard", dashboardSchema);


module.exports = dashboardModel;
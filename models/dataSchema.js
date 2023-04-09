var mongoose = require('mongoose');

var surveySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    province: { 
        type: String,
        required: true   
    },
    country: { 
        type: String,
        required: true
    },
    coronaAffected: { 
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('survey', surveySchema);
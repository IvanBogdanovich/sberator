const { Schema, model } = require('mongoose');

const schema = new Schema({
    namePrev: {
        type: String,
        required: true,
    },
    nameNext: {
        type: String,
        required: true,
    }
})

module.exports = model('User', schema);

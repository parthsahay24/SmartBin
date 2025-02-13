const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/hackathonTest2`);

const garbageSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
    },
    date : {
        type : Date,
        default : Date.now()
    },
    description: {
        type: String,
        // required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processed', 'completed'],
        default: 'processed'
    }
})

module.exports = mongoose.model("garbage",garbageSchema);
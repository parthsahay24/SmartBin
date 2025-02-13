const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/hackathonTest2`);

const recycleItemSchema = mongoose.Schema({
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
        required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processed', 'completed'],
        default: 'pending'
    }
})

module.exports = mongoose.model("recycleItem",recycleItemSchema);
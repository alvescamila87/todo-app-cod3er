const mongoose = require('mongoose')
mongoose.Promise = global.Promise 

const mongoURI = 'mongodb://localhost:27017/todo';

mongoose.connect(mongoURI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error: ', err))

module.exports = mongoose;

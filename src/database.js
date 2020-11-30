const mongoose = require('mongoose');

const URI = process.env.DB
    ? process.env.DB
    : 'mongodb://localhost/merndata';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});

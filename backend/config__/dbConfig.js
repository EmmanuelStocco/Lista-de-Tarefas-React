const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://suaurlmongo/annotations?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {
    //config padrão
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;
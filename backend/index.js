const env = process.env.NODE_ENV || 'development';

const app = require('express')();

const config = require('./config/config')[env];
const dbConnect = require('./config/mogoose-config');


require('./config/express-config')(app);


dbConnect(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, () => console.log('Server is listening on port ' + config.PORT));
    })
    .catch(err => {
        console.error('DB CONNECTION ERROR: ', err);
    });
const tempRoute = require('./temp.route');
module.exports = ((app) => {
    app.use('/temp', tempRoute);
});

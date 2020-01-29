const personRoute = require('./person.route');
module.exports = ((app) => {
    app.use('/person', personRoute);
});

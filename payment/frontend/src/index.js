const paymentApi = require('./routes/payment');

const configureRoutes = app => {
  paymentApi(app);
};

module.exports = configureRoutes;
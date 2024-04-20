const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const paymentApi = require('./src/routes/payment');

const app = express();

app.use(bodyParser.json());
app.use(cors());

paymentApi(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
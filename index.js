const express = require('express');
const bodyParser = require('body-parser');
const pricingController = require('./src/controllers/pricingController');

const app = express();

app.use(bodyParser.json());

app.use('/pricing', pricingController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

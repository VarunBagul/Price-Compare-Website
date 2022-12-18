const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './.env' });

const port = process.env.PORT || 5000;

process.setMaxListeners(0);

mongoose
  .connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connected successfully!');
  });

app.listen(port, () => {
  console.log(`Connected to port ${port} successfully!`);
});

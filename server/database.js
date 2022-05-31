const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.log(err));

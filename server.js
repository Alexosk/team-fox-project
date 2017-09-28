const express = require('express');
const app = express();

app.use(express.static('.'));

app.listen(8888, function () {
  console.log('Server running on port 8888!');
});

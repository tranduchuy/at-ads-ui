const express = require('express');
const app = express();

app.use(express.static('dist/fuse'));

app.get('/', (req, res) => {
  res.render('dist/fuse/index.html');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`ATA is running on port ${PORT}`);
});
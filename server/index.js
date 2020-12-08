const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 1604;

app.post('/submit', (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});

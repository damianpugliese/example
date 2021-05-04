const express = require('express'); 
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/items', require('./routes/items'));

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
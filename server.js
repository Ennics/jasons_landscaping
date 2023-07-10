const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Define a sample data model
const SampleSchema = new mongoose.Schema({
  name: String
});

const SampleModel = mongoose.model('Sample', SampleSchema);

// Serve the React app
app.use(express.static('client/build'));

// Process API requests
app.get('/api/sample', (req, res) => {
  SampleModel.find({}, (err, samples) => {
    if (err) {
      console.error('Failed to fetch samples', err);
      res.status(500).send('Failed to fetch samples');
    } else {
      res.json(samples);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

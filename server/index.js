require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api', eventRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('EventHub API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
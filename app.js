const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('DB connected');
});

// Define Image Schema
const imageSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    genre: { type: String, required: true },
    author: String
});
const Image = mongoose.model('Image', imageSchema);

// Define route for handling GET and POST requests
app.get('/images', async (req, res) => {
    try {
        const images = await Image.find({});
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/images', async (req, res) => {
    try {
        const { imageUrl, genre, author } = req.body;

        const newImage = new Image({
            imageUrl,
            genre,
            author
        });
        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

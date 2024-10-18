const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/room_dimensions', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Bedroom Schema
const bedroomSchema = new mongoose.Schema({
    width: Number,
    length: Number,
    sofaType: String,
    furniture: [String],
    lighting: [String],
    paint: String,
});
const Bedroom = mongoose.model('Bedroom', bedroomSchema);

// Kitchen Schema
const kitchenSchema = new mongoose.Schema({
    width: Number,
    length: Number,
    sofaType: String,
    furniture: [String],
    lighting: [String],
    paint: String,
});
const Kitchen = mongoose.model('Kitchen', kitchenSchema);

// Living Room Schema
const livingRoomSchema = new mongoose.Schema({
    width: Number,
    length: Number,
    sofaType: String,
    furniture: [String],
    lighting: [String],
    paint: String,
});
const LivingRoom = mongoose.model('LivingRoom', livingRoomSchema);

// Routes

// Bedroom form submission route
app.post('/submitBedroom', async (req, res) => {
    try {
        const bedroomData = new Bedroom({
            width: req.body.width,
            length: req.body.length,
            sofaType: req.body.sofaType,
            furniture: req.body.furniture || [],
            lighting: req.body.lighting || [],
            paint: req.body.paint,
        });

        await bedroomData.save();
        res.status(200).send('Bedroom data saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving bedroom data');
    }
});

// Kitchen form submission route
app.post('/submitKitchen', async (req, res) => {
    try {
        // Correct: Create a new Kitchen model here
        const kitchenData = new Kitchen({
            width: req.body.width,
            length: req.body.length,
            sofaType: req.body.sofaType,
            furniture: req.body.furniture || [],
            lighting: req.body.lighting || [],
            paint: req.body.paint,
        });

        await kitchenData.save();
        res.status(200).send('Kitchen data saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving kitchen data');
    }
});

// Living Room form submission route
app.post('/submitLivingRoom', async (req, res) => {
    try {
        const livingRoomData = new LivingRoom({
            width: req.body.width,
            length: req.body.length,
            sofaType: req.body.sofaType,
            furniture: req.body.furniture || [],
            lighting: req.body.lighting || [],
            paint: req.body.paint,
        });

        await livingRoomData.save();
        res.status(200).send('Living Room data saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving living room data');
    }
});

// Serve the forms

// Serve bedroom form
app.get('/bedroom', (req, res) => {
    res.sendFile(path.join(__dirname, 'bedroom_form.html'));
});

// Serve kitchen form
app.get('/kitchen', (req, res) => {
    res.sendFile(path.join(__dirname, 'kitchen_form.html'));
});

// Serve living room form
app.get('/livingroom', (req, res) => {
    res.sendFile(path.join(__dirname, 'livingroom_form.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
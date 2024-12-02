require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { KindeClient, GrantType } = require('@kinde-oss/kinde-nodejs-sdk');

const app = express();
const PORT = process.env.PORT || 8000;

const kindeClient = new KindeClient({
    domain: process.env.KINDE_DOMAIN,
    clientId: process.env.KINDE_CLIENT_ID,
    clientSecret: process.env.KINDE_CLIENT_SECRET,
    redirectUri: process.env.KINDE_REDIRECT_URI,
    logoutRedirectUri: process.env.KINDE_LOGOUT_REDIRECT_URI,
    grantType: GrantType.PKCE
});

const accessKey = process.env.ACCESS_KEY;


// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

app.get("/login", kindeClient.login(), (req, res) => {
    return res.redirect("/templates/index1.html");
});

// Registration route
app.get("/register", kindeClient.register(), (req, res) => {
    return res.redirect("/");
});

// Callback route (after login/register)
app.get("/callback", kindeClient.callback(), (req, res) => {
    return res.redirect("/templates/index1.html");
});

// Logout route
app.get("/logout", kindeClient.logout());




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
    res.sendFile(path.join(__dirname, 'Form.html'));
});

// Route to serve [contact.html](http://_vscodecontentref_/3) with the access key
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route to inject the access key into the HTML
app.get('/contact-key', (req, res) => {
    res.json({ accessKey });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
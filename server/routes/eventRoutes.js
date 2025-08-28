const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log('User signup request received:', { name, email, password });

    res.status(201).json({ message: 'User signed up successfully!' });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('User login request received:', { email, password });
    

    res.status(200).json({ message: 'User logged in successfully!' });
});

module.exports = router;
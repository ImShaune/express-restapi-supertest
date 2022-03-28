const { router } = require('express');

const router = Router();

/// Get All Users

router.get("/", (req,res) => {
    return res.json("all users sent");
});

// Get a specific user

router.get("/:id", (req,res) => {
    if (req.params.id === "U0001") {
        return res.json("User U0001 Found");
    }
    return res.status(404).json("User Not Found");
})

// Add user

router.post("/", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        return res.json(201).json("User Created");
    }
    res.status(400).json("User not created");
});

module.exports = router;
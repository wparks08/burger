const express = require("express");
const Burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    Burger.selectAll().then(burgers => {
        res.render("index", { burgers });
    });
});

router.post("/api/burger", (req, res) => {
    let burger = req.body;

    Burger.insertOne(burger);
    
    res.redirect("/");
});

router.put("/api/burger/:id", (req, res) => {
    let burger = req.body;

    if (!burger.id) {
        res.redirect("/");
        return;
    }

    Burger.updateOne(burger, { id: req.params.id });
    res.redirect("/");
});

module.exports = router;

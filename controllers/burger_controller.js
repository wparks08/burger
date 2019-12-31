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

    Burger.insertOne(burger)
    .then(result => {
        res.redirect("/");
    })
    .catch(error => {
        res.sendStatus(500);
    })
});

router.put("/api/burger/:id", (req, res) => {
    Burger.updateOne(req.body, { id: req.params.id })
    .then(result => {
        res.redirect("/");
    })
    .catch(error => {
        res.sendStatus(500);
    })
});

module.exports = router;

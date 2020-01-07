const express = require("express");
const Burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    Burger.selectAll().then(burgers => {
        let devoured = [];
        let notDevoured = [];

        burgers.forEach(burger => {
            if (burger.devoured) {
                devoured.push(burger);
            } else {
                notDevoured.push(burger);
            }
        });

        res.render("index", { devoured, notDevoured });
    });
});

router.post("/api/burger", (req, res) => {
    Burger.insertOne(req.body)
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
        res.sendStatus(200);
    })
    .catch(error => {
        res.sendStatus(500);
    })
});

module.exports = router;

const express = require("express");
const Burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    Burger.selectAll()
        .then(burgers => {
            res.render("index", { burgers })
        }) 
})

// router.get("/all", (req, res) => {
//     //list
//     res.render("")
// });

router.post("/burger", (req, res) => {
    //insert
});

router.put("/burger", (req, res) => {
    //update
})

module.exports = router;
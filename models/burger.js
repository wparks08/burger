const orm = require("../config/orm");

const BURGER_TABLE = "burger";

function Burger(values) {
    this.id = values.id;
    this.burger_name = values.burger_name;
    this.devoured = values.devoured;
}

function selectAll() {
    return new Promise((resolve, reject) => {
        orm.selectAll(BURGER_TABLE)
            .then(result => {
                let arr = [];

                result.forEach(burger => {
                    arr.push(new Burger(burger));
                });
                console.log("MODEL RESULT", arr);
                resolve(arr);
            })
            .catch(err => {
                reject(err);
            });
    })
}

function insertOne(values) {
    orm.insertOne(BURGER_TABLE)
        .then(result => {
            return result;
        });
}

function updateOne(values, conditions) {
    orm.updateOne(BURGER_TABLE, values, conditions)
        .then(result => {
            return result;
        });
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}
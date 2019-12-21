const connection = require("./connection");

function selectAll(table) {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM ${table}`,
            (err, result) => {
                if (err) {
                    reject(error);
                }
                console.log("ORM RESULT", result);
                resolve(result);
            }
        )
    })
}

function insertOne(table, values) {
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO ${table} SET ?`,
            values,
            (err, result) => {
                if (err) {
                    reject(error)
                }

                resolve(result);
            }
        )
    })
}

function updateOne(table, values, conditions) {
    return new Promise((resolve, reject) => {
        connection.query(
            `UPDATE ${table} SET ? WHERE ?`,
            [values, conditions],
            (err, result) => {
                if (err) {
                    reject(error);
                }

                resolve(result);
            }
        )
    })
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}
const connection = require("./connection");

orm = {
    selectAll: function(table) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM ${table}`, (err, result) => {
                if (err) {
                    reject(err);
                }
                console.log("ORM RESULT", result);
                resolve(result);
            });
        });
    },

    insertOne: function(table, values) {
        return new Promise((resolve, reject) => {
            connection.query(
                `INSERT INTO ${table} SET ?`,
                values,
                (err, result) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(result);
                }
            );
        });
    },

    updateOne: function(table, values, conditions) {
        return new Promise((resolve, reject) => {
            connection.query(
                `UPDATE ${table} SET ? WHERE ?`,
                [values, conditions],
                (err, result) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(result);
                }
            );
        });
    }
};

module.exports = orm;

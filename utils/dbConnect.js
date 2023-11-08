const { MongoClient } = require("mongodb");
require("dotenv").config();



const client = new MongoClient(process.env.MONGODB_TOKEN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db("database_blogcamp")
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },

};
const { MongoClient } = require("mongodb");


const client = new MongoClient("mongodb+srv://faridulhaquemurshed:bi64wE6Fu2Y1Eukw@cluster0.glmhfdv.mongodb.net/?retryWrites=true&w=majority", {
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
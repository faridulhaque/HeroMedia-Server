const { getDb } = require("../utils/dbConnect");

const registerUser = async (req, res, next) => {
    try {
        const db = getDb();
        const collection = db.collection("users")
        const email = req.body.email;
        const info = req.body;
        const existed = await collection.findOne({ email: email });

        if (!existed?._id) {
            const result = await collection.insertOne(info);
            res.status(200).json(result)
        }

        else if(existed._id){
            res.status(200).json({msg:"Already Exists"})
        }

    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = registerUser;
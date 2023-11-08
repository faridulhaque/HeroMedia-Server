const { getDb } = require("../utils/dbConnect");

const blogPost = async (req, res, next) => {
    try {
        const db = getDb();
        const collection = db.collection("blogPosts")
        const body = req.body;
        const result = await collection.insertOne(body);

        res.status(200).json(result);


    } catch (error) {
        res.status(400).send(error);
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const db = getDb();
        const collection = db.collection("blogPosts")
        const query = {};
        const cursor = collection.find(query);
        const posts = await cursor.toArray();
        res.status(200).json(posts);



    } catch (error) {
        res.status(400).send(error);
    }
}


module.exports = { blogPost, getAllBlogs };
const uuid = require("uuid");

const posts = new Map();

// method should add new post passed to it to the Map by adding two new properties
// “id” and “postedDate”.
const createPost = obj => {
    // ID should be created using imported UUID library method “uuid.v4()”
    const id = uuid.v4();
    const data = {
        name: obj.name,
        description: obj.description,
        id,
        postedDate: new Date(), // Posted Date should be set using the JS Date class “new Date()”.
    }
    // Map has a method called set that can be used to add a new key and value to it.
    // User the created ID field as the key., value should be the complete post object.
    posts.set(id, data);
}

// Add another method “getPosts” that returns all posts created.
const getPosts  = () => {
    return [...posts.values()]
}
// get post by id
let getPost = (id) => {
    return posts.get(id)
};

module.exports = {
    createPost,
    getPosts,
    getPost
};

const route = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// GET all and POST 
route.route('/').get(getUser).post(createUser);

// Get by Id 
route.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);


route.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = route;
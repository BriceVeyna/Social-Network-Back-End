const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    
} = require('../../controllers/userController');

//  /api/users
router.route('/').get(getUsers).post(createUser);

//  /api/users/:_id
router.route('/:_id').get(getSingleUser).put(updateUser).delete(deleteUser);

//  /api/users/:_id/thoughts
router.route('/:_id/thoughts').delete();

//  /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post().delete();
const route = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// All ports and thoughts
route.route('/').get(getThought).post(createThought);

// Single thought operation
route.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

route.route('/:thoughtId/reactions')
.post(createReaction);

// Delete
route.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = route;


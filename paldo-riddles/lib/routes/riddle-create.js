'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'post',
    path: '/riddle',
    options: {
        tags: ['api'],
        validate: {
            payload: {
                slug: Joi.string().required(),
                question: Joi.string().required(),
                answer: Joi.string().required()
            }
        },
        handler: async (request) => {

            const { Riddles } = request.models();
            const riddle = request.payload;

            return await Riddles.query().insertAndFetch(riddle);
        }
    }
};

let Joi = require('@hapi/joi');
let { responses } = require('../../utils')

exports.addProduct = (req, res, next) => {
    let schema = Joi.object().keys({
        id: Joi.optional(),
        product_name: Joi.string().required(),
        category_id: Joi.string().required(),
    });
    let data = schema.validate(req.body);
    if (data.hasOwnProperty('error')) {
        responses.response(res, false, data.error, 'en', 'FIELD_ERROR', HTTP_STATUS.BAD_REQUEST)
    } else {
        next()
    }
}
exports.updateProduct = (req, res, next) => {
    let schema = Joi.object().keys({
        id: Joi.optional(),
        product_name: Joi.string().required(),
        category_id: Joi.string().required(),
    });
    let data = schema.validate(req.body);
    if (data.hasOwnProperty('error')) {
        responses.response(res, false, data.error, 'en', 'FIELD_ERROR', HTTP_STATUS.BAD_REQUEST)
    } else {
        next()
    }
}


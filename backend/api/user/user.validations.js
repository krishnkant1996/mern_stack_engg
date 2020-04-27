let Joi = require('@hapi/joi');
let { responses } = require('../../utils')

exports.createUser = (req, res, next) => {
    let schema = Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(12).required()
    });

    let data = schema.validate(req.body);
    if (data.hasOwnProperty('error')) {
        responses.response(res, false, data.error, 'en', 'FIELD_ERROR', HTTP_STATUS.BAD_REQUEST)
        // commonResponse.sendJoiError(res, 'REQUIRED_FIELD_VALIDATION', data.error)
    } else {
        next()
    }
}

exports.signIn = (req, res, next) => {

    let schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(12).required(),
    });

    let data = schema.validate(req.body);
    if (data.hasOwnProperty('error')) {
        responses.response(res, false, data.error, 'en', 'FIELD_ERROR', HTTP_STATUS.BAD_REQUEST)
        // commonResponse.sendJoiError(res, 'REQUIRED_FIELD_VALIDATION', data.error)
    } else {
        next()
    }
}

exports.changePassword = (req, res, next) => {
    let schema = Joi.object().keys({
        old_password: Joi.string().min(12).required(),
        password: Joi.string().min(12).required(),
    });

    let data = schema.validate(req.body);
    if (data.hasOwnProperty('error')) {
        responses.response(res, false, data.error, 'en', 'FIELD_ERROR', HTTP_STATUS.BAD_REQUEST)
    } else {
        next()
    }
}

exports.forgotPassWord = (req, res, next) => {
	const schema = Joi.object().keys({
		email: Joi.string().max(50).email({ minDomainSegments: 2 }).required()
	});
	let data = schema.validate(req.body);

	if (data.hasOwnProperty('error')) {
        responses.response(res, false, data.error, 'en', 'FIELD_ERROR', HTTP_STATUS.BAD_REQUEST)
	} else {
		next();
	}
};

exports.resetPassWord = (req, res, next) => {
	const schema = Joi.object().keys({
		password: Joi.string().max(15).required()
    });
	let data = schema.validate(req.body);
	if (data.hasOwnProperty('error')) {
        responses.response(res, false, data.error, 'en', 'FIELD_ERROR', HTTP_STATUS.BAD_REQUEST)
	} else {
		next();
	}
};
let userServies = require('./user.services')
let {
    responses,
    gaurd
} = require('../../utils')
exports.signUp = async (req, res) => {
    try {
        let body = req.body
        let data = await userServies.createUser(body, 'MODERATOR');
        if (data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
        }
        return responses.response(res, false, {}, 'en', data.messages, data.status)
    } catch (errors) {
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}
exports.signIn = async(req, res) => {

    try{
        let data = await userServies.signIn(req.body.email, req.body.password)
        if(data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
        }
        return responses.response(res, false, {}, 'en', data.messages, data.status)
    }catch(errors) {
        console.log(errors)
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}

exports.verifyUser = async (req, res) => {
    try {
        let token = req.params.token;
        let verified_data = gaurd.verifyEmailToken(token);
        if (verified_data.success) {
            return CACHE.get(verified_data.decode.email + '__VERIFICATION_EMAIL', async (err, result) => {
                if (result != verified_data.decode.iat) {
                    return responses.response(res, false, {}, 'en', 'INVALID_TOKEN', HTTP_STATUS.UNAUTHORIZED)
                }
                let data = await userServies.verifyUser(verified_data.decode.email);
                if (data.success) {
                    return CACHE.del(verified_data.decode.email + '__VERIFICATION_EMAIL', (err, deleted) => {
                        console.log(deleted)
                        if (deleted) {
                            return responses.response(res, true, data.data, 'en', data.messages, data.status)
                        }
                        return responses.response(res, false, {}, 'en', data.messages, HTTP_STATUS.NOT_FOUND)
                    })
                }
                return responses.response(res, false, {}, 'en', data.messages, HTTP_STATUS.NOT_FOUND)
            });
        }
        return responses.response(res, false, {}, 'en', 'TOKEN_TIMEOUT', HTTP_STATUS.NOT_FOUND)
    } catch (errors) {
        return responses.response(res, false, {}, 'en', 'INTERNAL SERVER ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}


exports.forgotPassWord = async (req, res) => {

    try {
        let body = req.body
        let data = await userServies.forgotPassWord(body.email);
        if (data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
        }
        return responses.response(res, false, {}, 'en', data.messages, data.status)
    } catch (errors) {
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}

exports.resetPassword = async (req, res) => {
	const { password } = req.body;

	try {
		let options = {
			forgot_guid: req.params.code,
			password: password
        };

        const data = await userServies.resetPassword(options);
        console.log("data",data)

		if (data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
		}
        return responses.response(res, false, {}, 'en', data.messages, data.status)
	} catch (error) {
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
	}
};

exports.userDetails = async (req, res) => {
	const { user } = req;

	try {
        const data = await userServies.userDetails(user);
		if (data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
		}
        return responses.response(res, false, {}, 'en', data.messages, data.status)
	} catch (error) {
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
	}
};


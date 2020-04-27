let { mail } = require('../../utils')
let { gaurd } = require('../../utils')
let bcrypt = require('bcryptjs')
var uniqid = require('uniqid');

let moment = require('moment')
exports.createUser = async(data={}, transactionId=null) => {
    data['password'] = bcrypt.hashSync(data['password'], 10);
    
    let result = await DB.User.createUser(data, transactionId); 
    if(result==1) {
        let subject = 'WELCOME '+ String(data['first_name']).toUpperCase()
        let token = gaurd.createEmailVerificationToken({email: data.email});
        mail.sendMail({template: 'invitation-template',to: data.email, subject: subject, url : process.env.DOMAIL_URL+`api/auth/verify/${token.token}`, username: data.first_name + " " + data.last_name});
        CACHE.set(data.email+'__VERIFICATION_EMAIL', token.issueAt);
        return { success: true, data: {}, messages: 'USER_CREATED_SUCCUSSFULLY', status: HTTP_STATUS.CREATED }
    }
    if(!result.is_active)   {
        return { success: false, data: {}, messages: 'USER_IS_BLOCKED_BY_ADMIN', status: HTTP_STATUS.UNAUTHORIZED }
    }
    if(!result.is_verified) {
        let subject = 'WELCOME '+ String(data['first_name']).toUpperCase()
        let token = gaurd.createEmailVerificationToken({email: data.email});
        mail.sendMail({template: 'invitation-template',to: data.email, subject: subject, url : process.env.DOMAIL_URL+`api/auth/verify/${token.token}`, username: data.first_name + " " + data.last_name});
        CACHE.set(data.email+'__VERIFICATION_EMAIL', token.issueAt);
        return { success: true, data: {}, messages: 'VERIFICATION_EMAIL_SENT', status:HTTP_STATUS.OK }
    }
    if(result.is_verified) {
        return { success: false, data: {}, messages: 'USER_EXISTS', status:HTTP_STATUS.BAD_REQUEST}
    }
    return { success: false, data: {}, messages: 'OPERATION_NOT_PERMFORED_SUCCESSFULLY', status:HTTP_STATUS.BAD_REQUEST}
}


exports.signIn = async(email=null, password='', transactionId=null) => {
    let result = await DB.User.findUserByEmail(email, transactionId);
    if(result) {
        if(!result.is_active) {
            return { success: false, data: {}, messages: 'USER_IS_BLOCKED_BY_ADMIN', status: HTTP_STATUS.UNAUTHORIZED }
        }
        if(!result.is_verified) {
            let subject = 'WELCOME '+ String(result.first_name).toUpperCase()
            let token = gaurd.createEmailVerificationToken({email: result.email});
            mail.sendMail({template: 'invitation-template',to: result.email, subject: subject, url : process.env.DOMAIL_URL+`api/auth/verify/${token.token}`, username: result.first_name + " " + result.last_name});
            CACHE.set(result.email+'__VERIFICATION_EMAIL', token.issueAt);
           
            return { success: false, data: {}, messages: 'USER_IS_NOT_VERIFIED', status: HTTP_STATUS.UNAUTHORIZED }
        }
        let chkPass = await bcrypt.compare(password, result['password']);
        if(!chkPass) {
            return { success: false, data: {}, messages: 'EMAIL_PASSWORD_INCORRECT', status: HTTP_STATUS.UNAUTHORIZED }
        }
        let user_data = {first_name:result['first_name'],last_name:result['last_name'],email:result['email']}
        let token = gaurd.createJWTToken({id: result['id'],email: result['email']});
        return { success: true, data: {token:token,user_data}, messages: 'LOGIN_SUCCESS', status: HTTP_STATUS.OK }
    }
    return { success: false, data: {}, messages: 'EMAIL_PASSWORD_INCORRECT', status: HTTP_STATUS.UNAUTHORIZED }
}


exports.verifyUser = async(email=null, transactionId=null) => {
    let result = await DB.User.verifyUser(email, transactionId);
    if(result) {
        return { success: true, data: {}, messages: 'USER_VERIFIED_SUCCESSFULLY', status: HTTP_STATUS.OK }
    }
}

exports.forgotPassWord = async(email=null,transactionId=null) => {
    let existUser = await DB.User.findUserByEmail(email, transactionId);
    if(existUser) {
        console.log("options")

        let userData = {
            forgot_guid: uniqid() + uniqid()        
        };
    
        let options = {
            id: existUser.id
        };

        const userInfo = await DB.User.updateUser(options, userData, transactionId);
        console.log("userInfo",userInfo)

        if (userInfo) {
        let subject = 'FORGOT PASSWORD '+ String(existUser.first_name).toUpperCase()
        mail.sendMail({template: 'invitation-template',to: existUser.email, subject: subject, url : process.env.CLIENT_DOMAIL_URL+`react_client/new-password/${userData.forgot_guid}`, username: existUser.first_name + " " + existUser.last_name});
        return { success: true, data: {}, messages: 'RESET_PASSWORD_MAIL_SEND_SUCCESSFULLY' };
        }
    }
    return { success: false, data: {}, messages: 'EMAIL_NOT_FOUND', status: HTTP_STATUS.UNAUTHORIZED }

}
exports.resetPassword = async (data, transactionId = null) => {

	const user = await DB.User.findUserByForgotguid(data, transactionId);

	if (!user) {
		return { success: false, messages: 'INVALIDE_RESET_PASSWORD_CODE', data: user };
	}

	let userData = {
		password: bcrypt.hashSync(data.password, bcrypt.genSaltSync(4), null),
		forgot_guid: null
	};

	let options = {
		id: user.id
	};

	const userInfo = await DB.User.updateUser(options, userData, transactionId);
	if (userInfo) {
		return { success: true, data: {}, messages: 'RESET_PASSWORD_SUCCESULLY' };
	}
};

exports.userDetails = async(user=null,transactionId=null) => {
    let existUser = await DB.User.findUserByEmail(user.email, transactionId);
    if(existUser) {
        let {first_name,last_name,email,id} = existUser;
        return { success: true, data: {first_name,last_name,email,id}, messages: 'USER_DATA' };
    }
    return { success: false, data: {}, messages: 'EMAIL_NOT_FOUND', status: HTTP_STATUS.UNAUTHORIZED }

}

let categoryServies = require('./category.services')
let {
    responses,
    gaurd
} = require('../../utils')

exports.categoryList = async(req, res) => {
    try{
        let data = await categoryServies.categoryList();

        if(data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
        }
        return responses.response(res, false, {}, 'en', data.messages, data.status)
    }catch(errors) {
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}

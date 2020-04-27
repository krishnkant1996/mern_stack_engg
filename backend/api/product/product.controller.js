let productServies = require('./product.services')
let {
    responses,
    gaurd
} = require('../../utils')

exports.productList = async(req, res) => {
    let { user } =req;
    console.log(req.query)
    let {page , search} = req.query
    let options = {
        user_id:user.id,
        page,
        search
    }
    try{
        let data = await productServies.productList(options);
        if(data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
        }
        return responses.response(res, false, {}, 'en', data.messages, data.status)
    }catch(errors) {
        console.log(errors)
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}

exports.addProduct = async(req, res) => {
    const { product_name,category_id } = req.body;
    const { user } = req;
    let options= {
        product_name,
        category_id,
        user_id:user.id
    }
    console.log(options)
    try{
        let data = await productServies.addProduct(options);
        if(data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
        }
        return responses.response(res, false, {}, 'en', data.messages, data.status)
    }catch(errors) {
        console.log(errors)
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}
exports.updateProduct = async(req, res) => {
    const { product_name,category_id } = req.body;
    const { user } = req;
    try{
        let options= {
            id: req.params.id,
            product_name,
            category_id,
            user_id:user.id
        }
        console.log("options",options)
        let data = await productServies.updateProduct(options);
        if(data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
        }
        return responses.response(res, false, {}, 'en', data.messages, data.status)
    }catch(errors) {
        console.log(errors)
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}
exports.deleteProduct = async(req, res) => {
    const { user } = req;
    try{
        let options= {
            id: req.params.id,
            user_id:user.id,
            status:0
        }
        let data = await productServies.deleteProduct(options);
        if(data.success) {
            return responses.response(res, true, data.data, 'en', data.messages, data.status)
        }
        return responses.response(res, false, {}, 'en', data.messages, data.status)
    }catch(errors) {
        console.log(errors)
        return responses.response(res, false, {}, 'en', 'INTERNAL_SERVER_ERROR', HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}

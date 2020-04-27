
exports.productList = async(data={}) => {
    let result = await DB.Product.list(data)
    if(result) {
        return { success: true, data: result, messages: 'PRODUCT_LIST', status: HTTP_STATUS.OK }
    }
    return { success: false, data: {}, messages: 'PRODUCT_NOT_LIST', status: HTTP_STATUS.UNAUTHORIZED }
}

exports.addProduct = async(data={}) => {
    let result = await DB.Product.addProduct(data)
    if(result) {
        return { success: true, data: result, messages: 'ADD_PRODUCT', status: HTTP_STATUS.OK }
    }
    return { success: false, data: {}, messages: 'ADD_NOT_PRODUCT', status: HTTP_STATUS.UNAUTHORIZED }
}




exports.updateProduct = async(data={},transactionId=null) => {
    let product = DB.Product.findByID(data.id,transactionId);
    if(product){
        let result = await DB.Product.updateProduct(data)
        if(result) {
            return { success: true, data: result, messages: 'UPDATE_PRODUCT', status: HTTP_STATUS.OK }
        }
        return { success: false, data: {}, messages: 'UPDATE_NOT_PRODUCT', status: HTTP_STATUS.BAD_REQUEST }
    }
    return { success: false, data: {}, messages: 'UPDATE_NOT_PRODUCT', status: HTTP_STATUS.BAD_REQUEST }

}
exports.deleteProduct = async(data={},transactionId=null) => {
    let product = DB.Product.findByID(data.id,transactionId);
    if(product){
        let result = await DB.Product.updateProduct(data)
        if(result) {
            return { success: true, data: result, messages: 'DELETED_PRODUCT', status: HTTP_STATUS.OK }
        }
        return { success: false, data: {}, messages: 'DELETED_NOT_PRODUCT', status: HTTP_STATUS.BAD_REQUEST }
    }
    return { success: false, data: {}, messages: 'DELETED_NOT_PRODUCT', status: HTTP_STATUS.BAD_REQUEST }

}








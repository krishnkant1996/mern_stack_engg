
exports.categoryList = async() => {
    let result = await DB.Category.list()
    if(result) {
        return { success: true, data: result, messages: 'Category list', status: HTTP_STATUS.OK }
    }
    return { success: false, data: {}, messages: 'Category not found', status: HTTP_STATUS.BAD_REQUEST }
}




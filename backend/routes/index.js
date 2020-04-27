const { userRoutes } = require('../api/user');
const { productRoutes } = require('../api/product');
const { categoryRoutes } = require('../api/category');
let { responses } = require('../utils')

const initialize = (app) => {
    app.use('/api/auth', userRoutes);

    app.use('/api/product', productRoutes);
    app.use('/api/category', categoryRoutes);

    app.use(function(req, res, next) {
        if (!req.route) {
            responses.response(res, false, '', 'en', 'NOT_FOUND', HTTP_STATUS.NOT_FOUND);
        }
    });
};

module.exports = { initialize };
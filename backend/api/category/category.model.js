const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	var Category = sequelize.define(
		'dbo_categories', {
			    id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
              },
              category_name: {
                type: Sequelize.STRING(30),
                allowNull: false
              }
            },
            {
              timestamps: false,
              tableName: 'dbo_categories',
            }
	);
	Category.list = () => {
		return Category.findAll().then((category) => {
			return category;
		}).catch((err) => {
			return err;
		});
	}

	return Category;
};
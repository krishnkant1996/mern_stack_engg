const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.import('../user/user.model');
  let Category = sequelize.import('../category/category.model');

	let Product = sequelize.define(
		'dbo_products', {
			    id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
              },
              product_name: {
                type: Sequelize.STRING(30),
                allowNull: false
              },
          
              category_id: {
                type: Sequelize.STRING(100),
                allowNull: false
              },
              user_id: {
                type: Sequelize.STRING(100),
                allowNull: false
              },
              status:{
                type: Sequelize.INTEGER(3),
                allowNull:false,
                defaultValue:1
              }
             
            },
            {
              timestamps: true,
              tableName: 'dbo_products',
            }
	);
  Product.addProduct =async (data = {}, transactionId = null) => {
		let options = {
			transaction: transactionId
		};
		return await Product.create(data, options)
			.then((result) => {
        return result;
			})
			.catch((err) => {
				throw err;
			});
  };
  Product.updateProduct =async (data = {}, transactionId = null) => {
		let options = {
      transaction: transactionId,
      where: {
				id: data.id
			}
		};
		return await Product.update(data, options)
			.then((result) => {
        return result;
			})
			.catch((err) => {
				throw err;
			});
  };
	
  Product.list = async (data={}) => {
    console.log(data)
    let limit = 10;
    let page = data.page?data.page:1;
    let search = data.search?data.search:"";
    let {user_id } =data;

    let condition = {
		  user_id:user_id,
      status:1 ,
    };
    condition[Op.or] = [
      {
        product_name: {
          [Op.like]: '%' + search + '%'
        }
      }
    ];
	
    let count =await Product.count({
			where: condition,
			subQuery: false
		}).then((total) => {
			return total;
		});

		return await Product
			.findAll({
        where: condition,
         include: [
          {
            model: DB.Category,
            as:"category",
            required: true,
            attributes: [ 'category_name' ],
            order:["category_name","DESC"],
          }
        ],
        offset: (parseInt(page) - 1) * parseInt(limit),
				limit: parseInt(limit),
				page: parseInt(page),
			})
			.then((data) => {
        console.log("data",data)
				return {data,count};
			})
			.catch((error) => {
				return error;
			});
  };

  Product.findByID = (id=null,transactionId=null) => {
    return Product.findOne({
			where: { id },
			transaction: transactionId,
			raw: false
		})
		.then((result) => {
				return result;
			})
			.catch((err) => {
				throw err;
			});
	}

  Product.belongsTo(User , {as:"user_info", foreignKey: 'user_id', targetKey: 'id' });
  Product.belongsTo(Category , {as:"category", foreignKey: 'category_id', targetKey: 'id' });
	return Product;
};
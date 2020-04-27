const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define(
		'dbo_users', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			first_name: {
				type: Sequelize.STRING(30),
				allowNull: false
			},
			last_name: {
				type: Sequelize.STRING(30),
				allowNull: false
			},
			email: {
				type: Sequelize.STRING(50),
				allowNull: false
			},
			password: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			is_verified: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
				allowNull: false
			},
			forgot_guid: {
				type: Sequelize.STRING(200),
				allowNull: true
			},

			createdAt: {
				field: 'created_at',
				type: DataTypes.DATE,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				field: 'updated_at',
				type: DataTypes.DATE,
				defaultValue: Sequelize.NOW
			}
		}, {
			timestamps: true
		}
	);

	User.createUser = (data = {}, transactionID = null) => {
		let options = {
			defaults: data,
			where: {
				email: data.email
			}
		}
		return User.findOrCreate(options).spread((user, created) => {
			if(created) {
				return 1;
			} else {
				return user;
			}
		})
	}

	User.findUserByEmail = (email=null, transactionId=null) => {
		let options = {
			transaction: transactionId,
			where: {email: email},
			raw : false
		}
		return User.findOne(options).then((user) => {
			return user;
		}).catch((err) => {
			return err;
		});
	}
	User.updateUser = (options = {}, data = {}, transactionId) => {
		let condition = {
			where: {
				id: options.id
			},
			transaction: transactionId
		};
		return User.update(data, condition)
			.then((activeuser) => {
				return activeuser;
			})
			.catch((err) => {
				throw err;
			});
	};
	User.findUserByForgotguid = (options = {}, transactionId = null) => {
		return User.findOne({
			where: {
				forgot_guid: options.forgot_guid,
				is_active: '1'
			},
			transaction: transactionId
		})
			.then((userData) => {
				return userData;
			})
			.catch((err) => {
				throw err;
			});
	};
	User.verifyUser = (email=null, transactionId=null) => {
		let options ={
			transaction: transactionId,
			where: {
				email: email
			}
		}
		return User.update({is_verified: true}, options).then((data) => {
			return data;
		}).catch((err) => {
			return err
		})
	}
	User.forgotPassWord = (email=null, transactionId=null) => {
		let options ={
			transaction: transactionId,
			where: {
				email: email
			}
		}
		return User.update({is_verified: true}, options).then((data) => {
			return data;
		}).catch((err) => {
			return err
		})
	}

	return User;
};
import { Model, DataTypes } from "sequelize";
import sequelize from "./index";

export class User extends Model {}

User.init(
	{
		username: DataTypes.STRING,
		birthday: DataTypes.DATE,
		lastName: DataTypes.STRING,
	},
	{ sequelize, modelName: "user" },
);

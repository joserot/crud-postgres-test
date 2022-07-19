import { Model, DataTypes } from "sequelize";
import sequelize from "./index";

class Product extends Model {}

Product.init(
	{
		title: DataTypes.STRING(50),
		price: DataTypes.INTEGER,
	},
	{ sequelize, modelName: "product" },
);

export { Product };

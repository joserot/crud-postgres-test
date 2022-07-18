import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	dialect: "postgres",
	username: "zbdhhkpgcnwzuv",
	password: "e8c621f91beef3115e67b881a98fc3edbff3cf40f64f44f95b2e578353f85bdd",
	database: "d68p0952g2pqdi",
	port: 5432,
	host: "ec2-44-195-169-163.compute-1.amazonaws.com",
	ssl: true,
	// esto es necesario para que corra correctamente
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

export default sequelize;

// (async function main() {
// 	try {
// 		await sequelize.authenticate();
// 		console.log("Connection has been established successfully.");
// 	} catch (error) {
// 		console.error("Unable to connect to the database:", error);
// 	}
// })()

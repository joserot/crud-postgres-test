import sequelize from "./db/index";
//import { User } from "./db/user";
import { Product } from "./db/product";
import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	}),
);

const port = 5500;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// Obtener todos los productos
app.get("/products", async (req, res) => {
	await sequelize.sync({ alter: true });
	const allProducts = await Product.findAll();
	await res.json(allProducts);
});

// Obtener un producto
app.get("/products/:productId", async (req, res) => {
	const { productId } = await req.params;
	await sequelize.sync({ alter: true });
	const getProduct = await Product.findByPk(productId);
	await res.json(getProduct);
});

// Crear un producto
app.post("/product", async (req, res) => {
	const { title, price } = await req.body;
	await sequelize.sync({ alter: true });

	const newProduct = await Product.create({
		title,
		price,
	});

	await res.json({
		message: "product created",
	});
});

// Modificar un producto
app.patch("/products/:productId", async (req, res) => {
	const { productId } = await req.params;
	const { title, price } = await req.body;

	await sequelize.sync({ alter: true });

	await Product.update(
		{ title, price },
		{
			where: {
				id: productId,
			},
		},
	);

	await res.json({
		message: "product updated",
	});
});

// Eliminar un producto
app.delete("/products/:productId", async (req, res) => {
	const { productId } = await req.params;

	await sequelize.sync({ alter: true });

	await Product.destroy({
		where: {
			id: productId,
		},
	});

	await res.json({
		message: "product deleted",
	});
});

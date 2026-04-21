import { Product } from "../products/products.model";

export interface Order {
	id: string;
	products: Product[];
	total: number;
	date: string;
	isCompleted: boolean;
}


export const DEFAULT_ORDERS: Order[] = [
	{
	id: "#001",
		products: [
			{
				name: "Hot chocolate",
				price: 150.0,
				category: "hot_drinks",
				id: 3,
			},
			{
				name: "Hot chocolate",
				price: 150.0,
				category: "hot_drinks",
				id: 3,
			},
			{
				name: "Donut",
				price: 85.50,
				category: "pastries",
				id: 10,
			},
		],
		total: 235.50,
		date: "2024-06-19",
		isCompleted: false
	},
	{
	id: "#002",
		products: [
			{
				name: "Coffee with milk",
				price: 80.0,
				category: "hot_drinks",
				id: 1,
				variantName: "M",
			},
			{
				name: "Tea",
				price: 50.50,
				category: "hot_drinks",
				id: 2,
			},
			{
				name: "Tea",
				price: 50.50,
				category: "hot_drinks",
				id: 2,
			},
		],
		total: 181.00,
		date: "2024-06-20",
		isCompleted: true
	}
]
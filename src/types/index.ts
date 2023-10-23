export type productType = {
	id: number;
	name: string;
	price: number;
	category: string;
};

export type userType = {
	id: number;
	first_name: string;
	last_name: string;
	pass: string;
};

export type orderType = {
	id: string;
	productID: string;
	quantityProduct: number;
	userID: string;
	orderStatus: string;
};

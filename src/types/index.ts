export type productType = {
	id: string;
	name: string;
	price: number;
	category: string;
};

export type userType = {
	id: string;
	firstName: string;
	lastName: string;
	password: string;
};

export type orderType = {
	id: string;
	productID: string;
	quantityProduct: number;
	userID: string;
	orderStatus: string;
};

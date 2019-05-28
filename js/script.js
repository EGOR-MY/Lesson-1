var yourMoney = prompt("Введите Ваш бюджет :", "2000грн");
var yourTilteShop = prompt("Введите название Вашего магазина :", "Фенечная Лавка Бо");

var typeShop1 = prompt("Введите тип товара который будем продавать? ", "");
var typeShop2 = prompt("Введите тип товара который будем продавать?", "");
var typeShop3 = prompt("Введите тип товара который будем продавать? ", "");

var mainList = {};
var shopGoods = {};
var employers = ["Мария","Егор","Александр"];

shopGoods = [typeShop1, typeShop2, typeShop3]


mainList = {
	Money: yourMoney,
	title: yourTilteShop,
	Goods: shopGoods,
	People: employers,
	open: true
}

console.log(mainList);

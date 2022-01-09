create database whiskyExchange;

use whiskyExchange;

create table users (
id int ,
firstname varchar(255),
lastname varchar(255),
email varchar(255), 
password varchar(255),
city varchar(255),
street varchar(255),
role varchar(255) default "User",
primary key (id)
);

create table category (
id int auto_increment,
categoryName varchar(255),
primary key (id)
);

create table product (
id int auto_increment,
prodName varchar(255),
catID int,
imgUrl varchar(255),
price int,
foreign key (catID) references category(id),
primary key (id)
);

create table cart (
id int auto_increment,
userID int,
creationTime DATETIME default now(),
foreign key (userID) references users(id),
primary key (id)
);


create table cartItem (
id int auto_increment,
cartID int,
prodID int,
prodQuantity int,
totalProdPrice int,
foreign key (prodID) references product(id),
foreign key (cartID) references cart(id),
primary key (id)
);

create table ordering (
id int auto_increment,
cartID int,
userID int,
totalOrederPrice int,
prodQuantity int,
orderCity varchar(255),
orderStreet varchar(255),
orderCeationTime DATETIME default now(),
orderDeliveryTime date,
credit4digit int,
foreign key (cartID) references cart(id),
foreign key (userID) references users(id),
primary key (id)
);

insert into users (id, firstname, lastname, email, password, city, street)
values (1111,"Jim","Murray","user1@g.com", "123","new York","1st street"),(2222,"Michael","Jackson","user2@g.com", "123","new York","2nd street"),(3333,"Martine","Nouet","user3@g.com", "123","new York","3rd street");

insert into users (id, firstname, lastname, email, password, city, street, role)
values (5555,"Yossi","Leibman","user4@g.com","123","new York","5th avenue","Admin");

insert into category (categoryName)
values ("Highland single malts"),
("Speyside single malts"),
("Islay single malts"),
("Lowland single malts"),
("Campbeltown single malts"),
("Island single malts");

insert into product (prodName, catID, imgUrl, price)
values("ardbeg uigeadail 10",3,"https://www.mashkaot.co.il/files/catalog/item/thumb_big/ardbeg_uigeidail_988x988.jpg", 379),
("Highland park 18",1,"https://media.whisky.auction/900/74234_0.jpg?id=158755", 660);

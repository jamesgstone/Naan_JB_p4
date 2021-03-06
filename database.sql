create database whiskyExchange;

use whiskyExchange;


create table city (
id int auto_increment,
cityName varchar(255),
primary key (id)
);

create table users (
id int ,
firstname varchar(255),
lastname varchar(255),
email varchar(255), 
password varchar(255),
cityID int,
street varchar(255),
role varchar(255) default "User",
foreign key (cityID) references city(id),
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

insert into city (cityName)
values ("New York"), ("Roma"), ("Tel Aviv"), ("Paris"),("Amsterdam"),("Los Angeles"),("Herzelia"),("London"),("Montreal"),("Tokio");

insert into users (id, firstname, lastname, email, password, cityID, street)
values (1111,"Jim","Murray","user1@g.com", "123",1,"1st street"),(2222,"Michael","Jackson","user2@g.com", "123",1,"2nd street"),(3333,"Martine","Nouet","user3@g.com", "123",1,"3rd street");

insert into users (id, firstname, lastname, email, password, cityID, street, role)
values (5555,"Yossi","Leibman","user4@g.com","123",1,"5th avenue","Admin");

insert into category (categoryName)
values ("Highland"),
("Speyside"),
("Islay"),
("Lowland"),
("Campbeltown"),
("Island");

insert into product (prodName, catID, imgUrl, price)
values("Ardbeg uigeadail 10",3,"http://localhost:1000/img/ardbeg_uigeidail.jpg", 379),
("Balvenie Malt 40 Years Old", 2,"http://localhost:1000/img/balvenie_malt_40y.jpg",5727),
("Glenmorangie 1975 Tain L'Hermitage", 1,"http://localhost:1000/img/glenmorangie-1975.jpg",2177),
("Lagavulin 16 Year Old", 3,"http://localhost:1000/img/LAGAVULIN_16.jpg",217),
("Macallan 18yo 1981 Bottling", 2,"http://localhost:1000/img/the-macallan-18-year-old-1981-whisky.jpg",4360),
("Bladnoch 29 year old", 4,"http://localhost:1000/img/bladnoch-29-year-old.jpg",5673),
("Auchentoshan 42 Year Old 1965", 4,"http://localhost:1000/img/auchentoshan-42.jpg",4536),
("Glen Scotia 25 Years Old", 5,"http://localhost:1000/img/Glen_Scotia_25.jpg",523),
("Springbank 21 year old", 5,"http://localhost:1000/img/Springbank_21.jpg",158),
("Arran Sherry Cask",6,"http://localhost:1000/img/arran-sherry-cask.jpg",289),
("Jura 1988 Bottled 2019",6,"http://localhost:1000/img/jura-1988.jpg",731),
("Dalmore 30yo 2021 Edition",1,"http://localhost:1000/img/dalmore-30.jpg",4940),
("Highland park 18",6,"http://localhost:1000/img/highland_park_18.jpg", 660);

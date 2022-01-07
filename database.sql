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
creationTime date,
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
orderCeationTime date,
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

insert into vacations(title, destination ,description, imgUrl, startDate, endDate, price)
values("Campbeltown", "Scotland","visit and tour Campbeltown’s Whisky Distilleries", "https://luxuryscotlandtours.com/wp-content/uploads/2019/08/campbeltown-768x354.jpg","2020-01-01","2020-01-07",2030),
("ISLAY", "Scotland","visit and tour Islay’s Whisky Distilleries", "https://luxuryscotlandtours.com/wp-content/uploads/2019/08/laphroaig-768x354.jpg","2020-01-07","2020-01-15",2145),
("HIGHLANDS", "Scotland","visit and tour Oban’s Highland Whisky Distillery", "https://luxuryscotlandtours.com/wp-content/uploads/2019/09/oban-1-768x512.jpg","2020-01-12","2020-01-22",1968),
("SPEYSIDE", "Scotland","visit and tour Speyside’s Whisky Distilleries", "https://luxuryscotlandtours.com/wp-content/uploads/2019/09/Eriska_Sunset-e1568715163183.jpg","2020-01-01","2020-01-22",3090),
("Jameson", "Ireland","visit and tour jameson’s Irish Whiskey Distillery", "https://www.thespiritsbusiness.com/content/uploads/2017/03/jameson-distillery.jpg","2020-01-12","2020-01-15",1230),
("Bushmills", "Ireland","visit and tour Bushmills Irish Whiskey Distillery", "https://www.thespiritsbusiness.com/content/uploads/2019/03/Bushmills-distillery.jpg"  ,"2020-01-15","2020-01-20",1230),
("Jack Daniel", "USA","visit and tour Jack Daniel’s Tennessee Whiskey Distillery", "https://www.livingthedreamrtw.com/wp-content/uploads/2017/06/DSC05155-600x338-600x338.jpg","2020-01-15","2020-01-27",4570),
("Jim Beam", " USA","visit and tour Jim Beam’s bourbon Whiskey Distillery", "https://www.roadunraveled.com/wp-content/uploads/2017/07/bourbon-trail-top1.jpg","2020-01-07","2020-01-12",4200),
("Yamazaki", " Japan","visit and tour Yamazaki’s japanese Whiskey Distillery", "https://whisky.suntory.com/sites/default/files/2019-04/yamazaki-distillery-1.jpg","2020-01-12","2020-01-23",7890);

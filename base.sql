DROP SCHEMA IF EXISTS imghoster CASCADE;
CREATE SCHEMA imghoster;

SET search_path = imghoster;

CREATE TABLE users(
	id serial primary key,
	pseudo varchar(20) unique not null,
	pass text not null,
	email varchar(254) unique,
	age int,
	locked boolean default false
);

CREATE TABLE images(
	id serial primary key,
	link varchar(2083)
);

CREATE TABLE albums(
	id serial primary key,
	id_img int references images(id)
);

CREATE TABLE comments(
	id serial primary key,
	text varchar(300),
	id_user int references users(id),
	id_img int references images(id),
	id_album int references albums(id),
	id_comment int references comments(id)
);
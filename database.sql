

create table users(
    id serial primary key,
    name varchar(255),
    surname varchar(255)
);

create table books(
    id serial primary key,
    title varchar(255),
    author integer,
    foreign key (author) references users (id)
);
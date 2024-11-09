create table task (
	id serial primary key,
	description varchar(255) not null
);

insert into task (description) values('my test task');
insert into task (description) values('my another test task');
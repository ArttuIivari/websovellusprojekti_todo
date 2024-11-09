# websovellusprojekti_todo

## node libraries needed:

- /websovellusprojekti_todo> npm install express cors nodemon pg

- /server> npm install mocha chai --save-dev


### postgreSQL used here; in which case, run pgAdmin 4 and create this database:

``create table task (
	id serial primary key,
	description varchar(255) not null
);``

## Run these commands to start up react and the backend:

- /websovellusprojekti_todo> npm start

- /websovellusprojekti_todo/server> npm run devstart

#### for testing:

- /server> npm run test

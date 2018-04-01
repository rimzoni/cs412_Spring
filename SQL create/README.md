1. createdb 140302048

2. psql 140302048

3. CREATE USER Aziz2 WITH
	LOGIN
	NOSUPERUSER
	CREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD '12345678';

4. CREATE TABLE public."140302048"
(
    id serial,
    department character varying,
    manager character varying,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."140302048"
    OWNER to Aziz2;

5. INSERT INTO public."140302048" (department,manager) VALUES ('Computer Science','Kanita');
6. INSERT INTO public."140302048" (department,manager) VALUES ('Software Engineering','Jasminka');
7. INSERT INTO public."140302048" (department,manager) VALUES ('International Relations','Neko');
8. INSERT INTO public."140302048" (department,manager) VALUES ('Visual Arts','Umjetnik');
9. INSERT INTO public."140302048" (department,manager) VALUES ('Electrical Engineering','Elektricar');
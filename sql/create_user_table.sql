CREATE TABLE public."140302228"
(
     id serial,
     department character varying, 
     manager character varying, 
     primary key (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."14030228"
    OWNER to iuslab;
CREATE TABLE public."130303008"
(
    id serial,
    Department character varying,
    Manager character varying,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."130303008"
    OWNER to postgres;
